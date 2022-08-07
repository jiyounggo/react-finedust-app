import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import SelecBar from "./SelectBar";
function Card() {
  let [items, setitems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/data/data.json").then((response) => {
      setitems(response.data.response.body.items);
    });
  }, []);
  const navigate = useNavigate();

  let [countstar, setcountstar] = useState([""]);
  let [selectsidoName, selectsetsidoName] = useState();
  let [menu, setmenu] = useState("전국");

  const all = items.map((a, i) => {
    console.log(a.sidoName);
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
                    {/* {countstar[i]==true? :null} */}
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
      {/* <div>{tab}</div> */}
      <SelecBar menu={menu} setmenu={setmenu} />
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
