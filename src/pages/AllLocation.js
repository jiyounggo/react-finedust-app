import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import SelecBar from "../SelectBar";
import BookMark from "./BookMark";
function Card() {
  let [items, setitems] = useState([]);
  let [menu, setmenu] = useState("전국");

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const params = {
      serviceKey:
        "9cmNfRnvaOrobZwNoLxFPSrb2VW7xsR7ZGFhTGcMw38y2KaES2xSem4QwOPAH4UKP8DhCFEyoE59IDyqnSUgNQ%3D%3D",
      returnType: "json",
      numOfRows: 15000,
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  let [countstar, setcountstar] = useState([""]);
  let [selectsidoName, selectsetsidoName] = useState();

  const all = items.map((a, i) => {
    if (menu == "전국") {
      return (
        <Container>
          <div key={Math.floor(Math.random() * 100000)}>
            {a.pm10Grade === "1" ? (
              <div className="bgcolor1">
                <div className="header">
                  <p>{a.stationName}</p>
                  <button
                    onClick={() => {
                      let copy = [...countstar];
                      copy[i] = !copy[i];
                      setcountstar(copy);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
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
                  <button
                    onClick={() => {
                      let copy = [...countstar];
                      copy[i] = !copy[i];
                      setcountstar(copy);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
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
                  <button
                    onClick={() => {
                      let copy = [...countstar];
                      copy[i] = !copy[i];
                      setcountstar(copy);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
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
    } else if (a.sidoName == menu) {
      return (
        <Container>
          <div key={Math.floor(Math.random() * 100000)}>
            {a.pm10Grade === "1" ? (
              <div className="bgcolor1">
                <div className="header">
                  <p>{a.stationName}</p>
                  <button
                    onClick={() => {
                      let copy = [...countstar];
                      copy[i] = !copy[i];
                      setcountstar(copy);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
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
                  <button
                    onClick={() => {
                      let copy = [...countstar];
                      copy[i] = !copy[i];
                      setcountstar(copy);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
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
                  <button
                    onClick={() => {
                      let copy = [...countstar];
                      copy[i] = !copy[i];
                      setcountstar(copy);
                    }}
                  >
                    {countstar[i] ? <p>★</p> : <p>☆</p>}
                    {countstar[i]}
                  </button>
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
      <SelecBar search={search} setmenu={setmenu} />
      {all}
    </div>
  );
}

export default Card;

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
