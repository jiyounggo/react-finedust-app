import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeStar } from "../redux/favorite.js";
import { Container } from "../Style/Box";
import imgA from "../images/좋음.png";
import imgB from "../images/보통.png";
import imgC from "../images/나쁨.png";
function BookMark() {
  let [countstar, setcountstar] = useState([false]);
  console.log(countstar);
  let state = useSelector((state) => {
    console.log(state.favorite);
    return state.favorite;
  });
  let dispatch = useDispatch();
  const deleteStar = (i) => {
    let copy = [...countstar];
    copy[i] = !copy[i];
    setcountstar(copy);
    dispatch(removeStar(i));
  };
  const item = state.map((a, i) => {
    if (a.star) {
      return (
        <Container>
          <div key={Math.floor(Math.random() * 100000)}>
            {a.pm10Grade == "1" ? (
              <div className="bgcolor1">
                <div className="header">
                  <button
                    onClick={() => {
                      deleteStar(i);
                    }}
                  >
                    {a.star ? <p>★</p> : <p>☆</p>}
                  </button>

                  <p>{a.star}</p>
                </div>
                <p>{a.stationName}</p>
                <p>{a.sidoName}</p>
                <p>{a.time}</p>
                <img src={imgA} style={{ width: "20px" }} />
                <p>좋음</p>
              </div>
            ) : a.pm10Grade === "2" || a.pm10Grade === "3" ? (
              <div className="bgcolor2">
                <div className="header">
                  <button
                    onClick={() => {
                      deleteStar(i);
                    }}
                  >
                    {a.star ? <p>★</p> : <p>☆</p>}
                  </button>

                  <p>{a.star}</p>
                </div>
                <p>{a.stationName}</p>
                <p>{a.sidoName}</p>
                <p>{a.time}</p>
                <img src={imgB} style={{ width: "20px" }} />
                <p>보통</p>
              </div>
            ) : (
              <div className="bgcolor3">
                <div className="header">
                  <button
                    onClick={() => {
                      deleteStar(i);
                    }}
                  >
                    {a.star ? <p>★</p> : <p>☆</p>}
                  </button>

                  <p>{a.star}</p>
                </div>
                <p>{a.stationName}</p>
                <p>{a.sidoName}</p>
                <p>{a.time}</p>
                <img src={imgC} style={{ width: "20px" }} />
                <p>나쁨</p>
              </div>
            )}
          </div>
        </Container>
      );
    } else if (a.star == false) {
      return null;
    }
  });
  return <div>{item}</div>;
}

export default BookMark;
