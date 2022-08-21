import axios from "axios";
import { useEffect, useState } from "react";

export const GetDatas = async (sido) => {
  const [search, setSearch] = useState([]);

  const params = {
    serviceKey:
      "9cmNfRnvaOrobZwNoLxFPSrb2VW7xsR7ZGFhTGcMw38y2KaES2xSem4QwOPAH4UKP8DhCFEyoE59IDyqnSUgNQ%3D%3D",
    returnType: "json",
    numOfRows: 100,
    pageNo: 1,
    sidoName: "",
    ver: 1.0,
  };

  try {
    const response = await axios.get(
      `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${params.serviceKey}&returnType=${params.returnType}&numOfRows=${params.numOfRows}&pageNo=${params.pageNo}&sidoName=${sido}&ver=${params.ver}`
    );
    return setSearch(response.data.response.body.items);
  } catch (e) {
    console.log("실패", e);
  }
};
