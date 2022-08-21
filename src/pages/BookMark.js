import React, { useState } from "react";
import axios from "axios";
import { GetDatas } from "../api/data";
import { useEffect } from "react";
import SelecBar from "../SelectBar.js";

async function BookMark() {
  const [dataList, setDataList] = useState("");
  const [sido, setsido] = useState("서울");
  console.log(sido);
  const data = await GetDatas(sido);
  console.log(data);

  return (
    <div>
      <SelecBar />
    </div>
  );
}

export default BookMark;
