/*global kakao*/
import React, { useEffect, useState } from "react";
import { Location } from "../api/location";
// import { kakaoAddress } from "../api/kakaoAdress";
import { current } from "@reduxjs/toolkit";
import ALLlocation from "./AllLocation";
import axios from "axios";
import styled from "@emotion/styled";
function MyLocation() {
  const [lat, setlat] = useState();
  const [lng, setlng] = useState();
  const [location, settLocation] = useState("");
  const [currentLocation, setcurrentLocation] = useState(""); //구
  const [dongName, setdongName] = useState(""); // 동

  useEffect(() => {
    geolocation();
  }, []);

  const geolocation = () => {
    const onGeoOk = (position) => {
      const { latitude, longitude } = position.coords;
      settLocation({
        latitude,
        longitude,
      });
    };

    const onGeoError = () => {
      console.log("Er");
    };

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  };

  //kakao

  var geocoder = new kakao.maps.services.Geocoder();

  var callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      setcurrentLocation(result[0].region_1depth_name.slice(0, 2));
      setdongName(result[0].region_3depth_name);
      console.log(result[0]);
      console.log(dongName);
      console.log(currentLocation);
    }
  };

  geocoder.coord2RegionCode(location.longitude, location.latitude, callback);

  useEffect(() => {
    axios.get("http://localhost:3000/data/data.json").then((response) => {
      setitems(response.data.response.body.items);
    });
  }, []);

  let [items, setitems] = useState([]);
  let [countstar, setcountstar] = useState([""]);

  const all = items.map((a, i) => {
    if (a.sidoName == currentLocation && a.stationName == dongName)
      return (
        <Container>
          <div key={Math.floor(Math.random() * 100000)}>
            {a.pm10Grade === "1" ? (
              <div className="bgcolor1">
                <div className="header">
                  <p>{a.stationName}</p>
                </div>
                <p>{a.sidoName}</p>

                <p>{a.dataTime}</p>
                <img src="./좋음.png" style={{ width: "20px" }} />
                <p>좋음</p>
              </div>
            ) : a.pm10Grade === "2" || a.pm10Grade === "3" ? (
              <div className="bgcolor2">
                <div className="header">
                  <p>{a.stationName}</p>
                </div>
                <p>{a.sidoName}</p>
                <p>{a.dataTime}</p>
                <img src="./보통.png" style={{ width: "20px" }} />
                <p>보통</p>
              </div>
            ) : (
              <div className="bgcolor3">
                <div className="header">
                  <p>{a.stationName}</p>
                </div>
                <p>{a.sidoName}</p>
                <p>{a.dataTime}</p>
                <img src="./나쁨.png" style={{ width: "20px" }} />
                <p>나쁨</p>
              </div>
            )}
          </div>
        </Container>
      );
  });

  return (
    <div>
      <select>
        <option value="동이름">{currentLocation}</option>
      </select>
      <select>
        <option value="전국">{dongName}</option>
        <option value="강원">강원</option>
      </select>
      {all}
    </div>
  );
}
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  li {
    border: 1px solid black;
  }
  .bgcolor1 {
    background-color: green;
  }

  .header {
    display: flex;
  }
  .bgcolor2 {
    background-color: yellow;
  }
  .bgcolor3 {
    background-color: red;
  }
`;

export default MyLocation;
