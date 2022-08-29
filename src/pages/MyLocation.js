/*global kakao*/
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../elements/Loading";
import { Container } from "../Style/Box";
import styled from "@emotion/styled";
import Box from "../components/Box";
const geocoder = new kakao.maps.services.Geocoder();

function MyLocation() {
  const [location, settLocation] = useState("");
  const [currentLocation, setcurrentLocation] = useState(""); //현재 지역
  const [dongName, setdongName] = useState(""); // 동
  const [stationName, setStationName] = useState([]);
  const [items, setitems] = useState([]);
  const [menu, setmenu] = useState("전체");

  const selectoption = (e) => {
    setmenu(e.target.value);
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

  const all = items.map((a) => {
    if (a.stationName === menu) {
      return <Container>{Box(a)}</Container>;
    } else if (menu == "전체") {
      return <Container>{Box(a)}</Container>;
    }
  });

  //select bar 선택
  let les = [];
  {
    items.map((item) => les.push(item.stationName));
  }

  return (
    <Select>
      {items.length > 0 ? (
        <div className="slectBar">
          <select>
            <option value="시이름">{currentLocation}</option>
          </select>
          <select onChange={selectoption}>
            <option value="전체">전체</option>
            {les.map((item) => (
              <option value={item}>
                <p>{item}</p>
              </option>
            ))}
          </select>
        </div>
      ) : (
        <Loading />
      )}
      <div> {all}</div>
    </Select>
  );
}

const Select = styled.div`
  .slectBar {
    display: flex;
    justify-content: center;
    margin: 30px;
  }
`;
export default MyLocation;
