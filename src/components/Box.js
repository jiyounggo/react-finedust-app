import React from "react";
import imgA from "../images/좋음.png";
import imgB from "../images/보통.png";
import imgC from "../images/나쁨.png";

function Box(a, i) {
  return (
    <div key={Math.floor(Math.random() * 100000)}>
      {a.pm10Grade === "1" ? (
        <div className="bgcolor1">
          <div className="header">
            <p>{a.stationName}</p>
          </div>
          <p>{a.sidoName}</p>
          <p>{a.dataTime}</p>
          <img src={imgA} style={{ width: "20px" }} />
          <p>좋음</p>
        </div>
      ) : a.pm10Grade === "2" || a.pm10Grade === "3" ? (
        <div className="bgcolor2">
          <div className="header">
            <p>{a.stationName}</p>
          </div>
          <p>{a.sidoName}</p>
          <p>{a.dataTime}</p>
          <img src={imgB} style={{ width: "20px" }} />
          <p>보통</p>
        </div>
      ) : (
        <div className="bgcolor3">
          <div className="header">
            <p>{a.stationName}</p>
          </div>
          <p>{a.sidoName}</p>
          <p>{a.dataTime}</p>
          <img src={imgC} style={{ width: "20px" }} />
          <p>나쁨</p>
        </div>
      )}
    </div>
  );
}

export default Box;
