import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeStar } from "../redux/favorite.js";

function BookMark() {
  let [countstar, setcountstar] = useState([false]);
  console.log(countstar);
  let state = useSelector((state) => {
    console.log(state.favorite);
    return state.favorite;
  });
  let dispatch = useDispatch();

  const item = state.map((a, i) => {
    if (a.star) {
      return (
        <div key={Math.floor(Math.random() * 100000)}>
          <p>{a.stationName}</p>
          <button
            onClick={() => {
              let copy = [...countstar];
              copy[i] = !copy[i];
              setcountstar(copy);
              dispatch(removeStar(i));
            }}
          >
            {a.star ? <p>★</p> : <p>☆</p>}
          </button>
          <p>{a.star}</p>
        </div>
      );
    } else if (a.star == false) {
      return null;
    }
  });
  return <div>{item}</div>;
}

export default BookMark;
