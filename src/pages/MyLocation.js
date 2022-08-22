/*global kakao*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

function MyLocation() {
  const [location, settLocation] = useState("");
  const [currentLocation, setcurrentLocation] = useState(""); //현재 지역
  const [dongName, setdongName] = useState(""); // 동
  let [items, setitems] = useState([]);
  let [menu, setmenu] = useState(dongName);

  useEffect(() => {
    search();
    geolocation();
  }, []);

  const selectoption = (e) => {
    setmenu(e.target.value);
  };

  const search = async () => {
    const params = {
      serviceKey:
        "9cmNfRnvaOrobZwNoLxFPSrb2VW7xsR7ZGFhTGcMw38y2KaES2xSem4QwOPAH4UKP8DhCFEyoE59IDyqnSUgNQ%3D%3D",
      returnType: "json",
      numOfRows: 150000,
      pageNo: 1,
      sidoName: `${currentLocation}`,
      ver: 1.0,
    };

    await axios
      .get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${params.serviceKey}&returnType=${params.returnType}&numOfRows=${params.numOfRows}&pageNo=${params.pageNo}&sidoName=${params.sidoName}&ver=${params.ver}`
      )
      .then((response) => {
        setitems(response.data.response.body.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const geolocation = () => {
    const onGeoOk = (position) => {
      const { latitude, longitude } = position.coords;
      settLocation({
        latitude,
        longitude,
      });
    };
    const onGeoError = () => {
      console.log("tqtq");
    };
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  };
  //kakao address
  var geocoder = new kakao.maps.services.Geocoder();

  var callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      setcurrentLocation(result[0].region_1depth_name.slice(0, 2));
      setdongName(result[0].region_3depth_name);
    }
  };
  geocoder.coord2RegionCode(location.longitude, location.latitude, callback);

  const all = items.map((a, i) => {
    if (a.stationName == menu) {
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
    } else if (menu == null) {
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
    }
  });
  //select dong
  let lestation = [];

  {
    items.map((a) => {
      {
        a.sidoName == currentLocation && lestation.push(a.stationName);
      }
    });
  }

  return (
    <div>
      <select>
        <option value="동이름">{currentLocation}</option>
      </select>

      <select onChange={selectoption}>
        {lestation.map((item) => (
          <option key={item.stationName}>{item}</option>
        ))}
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
