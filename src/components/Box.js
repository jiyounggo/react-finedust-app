import React from "react";
import imgA from "../images/좋음.png";
import imgB from "../images/보통.png";
import imgC from "../images/나쁨.png";

function Box(a, i) {
  return (
    <div key={Math.floor(Math.random() * 100000)}>
      {a.pm10Grade === "1" ? (
        <div className="bgcolor1">
          <div className="top">
            <div className="stationName">
              <p>{a.stationName}</p>
              <p>{a.sidoName}</p>
            </div>
            <p>{a.dataTime}</p>
            <img src={imgA} />
            <p className="stateTxt">보통</p>
          </div>
        </div>
      ) : a.pm10Grade === "2" || a.pm10Grade === "3" ? (
        <div className="bgcolor2">
          <p>{a.stationName}</p>
          <p>{a.sidoName}</p>
          <p>{a.dataTime}</p>
          <img src={imgB} />
          <p className="stateTxt">좋음</p>
        </div>
      ) : (
        <div className="bgcolor3">
          <p>{a.stationName}</p>

          <p>{a.sidoName}</p>
          <p>{a.dataTime}</p>
          <img src={imgC} />
          <p className="stateTxt">나쁨</p>
        </div>
      )}
    </div>
  );
}

export default Box;
