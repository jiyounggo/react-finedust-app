/*global kakao*/
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
const geocoder = new kakao.maps.services.Geocoder();

function MyLocation() {
  const [location, settLocation] = useState("");
  const [currentLocation, setcurrentLocation] = useState(""); //현재 지역
  const [dongName, setdongName] = useState(""); // 동
  const [items, setitems] = useState([]);
  const [menu, setmenu] = useState("전체");

  const selectoption = (e) => {
    setmenu(e.target.value);
    console.log(menu);
  };

  // kakao address
  const kakaoPositionSearch = useCallback(async (si, dong) => {
    const params = {
      serviceKey:
        "9cmNfRnvaOrobZwNoLxFPSrb2VW7xsR7ZGFhTGcMw38y2KaES2xSem4QwOPAH4UKP8DhCFEyoE59IDyqnSUgNQ%3D%3D",
      returnType: "json",
      numOfRows: 150000,
      pageNo: 1,
      sidoName: `${si}`,
      ver: 1.0,
    };
    await axios
      .get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${params.serviceKey}&returnType=${params.returnType}&numOfRows=${params.numOfRows}&pageNo=${params.pageNo}&sidoName=${params.sidoName}&ver=${params.ver}`
      )
      .then((response) => {
        // console.log(response)
        // console.log(response.data.response.body.items)
        setitems(response.data.response.body.items);
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const callback = useCallback(
    (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setcurrentLocation(result[0].region_1depth_name.slice(0, 2));
        setdongName(result[0].region_3depth_name);
        kakaoPositionSearch(
          result[0].region_1depth_name.slice(0, 2),
          result[0].region_3depth_name
        );
      }
    },
    [kakaoPositionSearch]
  );

  // 유저 현위치 값 성공
  const onGeoOk = useCallback(
    (position) => {
      const { latitude, longitude } = position.coords;
      settLocation({
        latitude,
        longitude,
      });
      geocoder.coord2RegionCode(longitude, latitude, callback);
      // kakaoPositionSearch(latitude,longitude)
    },
    [callback]
  );

  // 유저 현위치 값 실패 (오류처리)
  const onGeoError = () => {
    settLocation(null);
  };

  // 렌더링 된 후 유저의 현위치 값을 가져온다.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, [onGeoOk]);

  const all = items.map((a, i) => {
    if (a.stationName === menu) {
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
    } else if (menu == "전체") {
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

  return (
    <div>
      {items.length > 0 ? (
        <>
          <select>
            <option value="동이름">{currentLocation}</option>
          </select>
          <select onChange={selectoption}>
            <option value="전체">전체</option>
            {items.map((item) => (
              <option value={item.stationName}>
                <p>{item.stationName}</p>
              </option>
            ))}
          </select>
        </>
      ) : (
        <p>로딩바</p>
      )}
      <div> {all}</div>
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
