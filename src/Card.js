import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function Card() {
  let [items, setitems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/data/data.json").then((response) => {
      setitems(response.data.response.body.items);
    });
  }, []);
  const navigate = useNavigate();
  let [star, setstar] = useState(true);
  let [star1, setstar1] = useState(true);
  let [star2, setstar2] = useState(true);
  let [bookmarkstar, setbookmark] = useState([]);

  return (
    <Container>
      {items &&
        items.map((a, i) => {
          return (
            <div key={Math.floor(Math.random() * 100000)}>
              {a.pm10Grade === "1" ? (
                <div className="bgcolor1">
                  <div className="header">
                    <p>{a.stationName}</p>
                    <button
                      onClick={() => {
                        setstar(!star);
                      }}
                    >
                      {star ? <p>☆</p> : <p>★</p>}
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
                        setstar1(!star1);
                      }}
                    >
                      {star1 ? <p>☆</p> : <p>★</p>}
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
                        setstar2(!star2);
                      }}
                    >
                      {star2 ? <p>☆</p> : <p>★</p>}
                    </button>
                  </div>
                  <p>{a.sidoName}</p>
                  <p>{a.dataTime}</p>
                  <img src="./나쁨.png" style={{ width: "20px" }} />
                  <p>나쁨</p>
                </div>
              )}
            </div>
          );
        })}
    </Container>
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
