import axios from "axios";

import { useEffect, useState } from "react";
import { Container } from "../Style/Box";
import imgA from "../images/좋음.png";
import imgB from "../images/보통.png";
import imgC from "../images/나쁨.png";
import SelecBar from "../elements/SelectBar";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/favorite.js";
import Loading from "../elements/Loading";
import styled from "@emotion/styled";

function Card() {
  let [items, setitems] = useState([]);
  let [menu, setmenu] = useState("전국");
  let [flag, setFlag] = useState(false);
  let state = useSelector((state) => {
    return state.favorite;
  });
  let dispatch = useDispatch();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const params = {
      serviceKey:
        "9cmNfRnvaOrobZwNoLxFPSrb2VW7xsR7ZGFhTGcMw38y2KaES2xSem4QwOPAH4UKP8DhCFEyoE59IDyqnSUgNQ%3D%3D",
      returnType: "json",
      numOfRows: 1000,
      pageNo: 1,
      sidoName: `${menu}`,
      ver: 1.0,
    };

    await axios
      .get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${params.serviceKey}&returnType=${params.returnType}&numOfRows=${params.numOfRows}&pageNo=${params.pageNo}&sidoName=${params.sidoName}&ver=${params.ver}`
      )
      .then((response) => {
        setitems(response.data.response.body.items);
        setFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //즐겨찾기 추가
  let [countstar, setcountstar] = useState([false]);

  let changeStar = (a, i) => {
    let copy = [...countstar];
    copy[i] = !copy[i];
    setcountstar(copy);

    //즐겨찾기 중복 검사
    let dupValue = state.findIndex((item) => {
      return item.stationName === a.stationName;
    });
    {
      dupValue === -1 &&
        dispatch(
          addItem({
            stationName: a.stationName,
            sidoName: a.sidoName,
            star: !countstar[i],
            sido: a.pm10Grade,
            time: a.dataTime,
            pm10Grade: a.pm10Grade,
          })
        );
    }
  };

  const all = items.map((a, i) => {
    if (menu == "전국") {
      return (
        <Container>
          <div key={Math.floor(Math.random() * 100000)}>
            {a.pm10Grade === "1" ? (
              <div className="bgcolor1">
                <div className="header">
                  <button
                    onClick={() => {
                      changeStar(a, i);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
                </div>
                <div className="top">
                  <div className="stationName">
                    <p>{a.stationName}</p>
                    <p>{a.sidoName}</p>
                  </div>
                  <p>{a.dataTime}</p>
                  <img src={imgA} />
                  <p className="stateTxt">좋음</p>
                </div>
              </div>
            ) : a.pm10Grade === "2" || a.pm10Grade === "3" ? (
              <div className="bgcolor2">
                <div className="header">
                  <button
                    onClick={() => {
                      changeStar(a, i);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
                </div>
                <div className="top">
                  <div className="stationName">
                    <p>{a.stationName}</p>
                    <p>{a.sidoName}</p>
                  </div>
                  <p>{a.dataTime}</p>
                  <img src={imgB} />
                  <p className="stateTxt">좋음</p>
                </div>
              </div>
            ) : (
              <div className="bgcolor3">
                <div className="header">
                  <button
                    onClick={() => {
                      changeStar(a, i);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
                </div>
                <div className="top">
                  <div className="stationName">
                    <p>{a.stationName}</p>
                    <p>{a.sidoName}</p>
                  </div>
                  <p>{a.dataTime}</p>
                  <img src={imgC} />
                  <p className="stateTxt">좋음</p>
                </div>
              </div>
            )}
          </div>
        </Container>
      );
    } else if (a.sidoName == menu) {
      return (
        <Container>
          <div key={Math.floor(Math.random() * 100000)}>
            {a.pm10Grade === "1" ? (
              <div className="bgcolor1">
                <div className="header">
                  <button
                    onClick={() => {
                      changeStar(a, i);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
                  <p>{a.stationName}</p>
                </div>
                <p>{a.sidoName}</p>
                <p>{a.dataTime}</p>
                <img src={imgA} />
                <p>좋음</p>
              </div>
            ) : a.pm10Grade === "2" || a.pm10Grade === "3" ? (
              <div className="bgcolor2">
                <div className="header">
                  <button
                    onClick={() => {
                      changeStar(a, i);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
                  <p>{a.stationName}</p>
                </div>
                <p>{a.sidoName}</p>
                <p>{a.dataTime}</p>
                <img src={imgB} />
                <p>보통</p>
              </div>
            ) : (
              <div className="bgcolor3">
                <div className="header">
                  <button
                    onClick={() => {
                      changeStar(a, i);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
                  <p>{a.stationName}</p>
                </div>
                <p>{a.sidoName}</p>
                <p>{a.dataTime}</p>
                <img src={imgC} />
                <p>나쁨</p>
              </div>
            )}
          </div>
        </Container>
      );
    }
  });
  return (
    <Select>
      {flag ? (
        <div>
          <div className="slectBar">
            <SelecBar search={search} setmenu={setmenu} />
          </div>
          {all}
        </div>
      ) : (
        <Loading />
      )}
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
export default Card;
