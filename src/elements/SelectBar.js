import React from "react";
import { Suspense, useEffect, useState } from "react";
function SelecBar({ setmenu, search }) {
  const selectoption = (e) => {
    setmenu(e.target.value);
  };
  return (
    <div>
      <select onChange={selectoption}>
        <option value="전국">전국</option>
        <option value="강원">강원</option>
        <option value="경기">경기</option>
        <option value="경남">경남</option>
        <option value="경북">경북</option>
        <option value="광주">광주</option>
        <option value="대구">대구</option>
        <option value="대전">대전</option>
        <option value="부산">부산</option>
        <option value="서울">서울</option>
        <option value="울산">울산</option>
        <option value="인천">인천</option>
        <option value="전남">전남</option>
        <option value="전북">전북</option>
        <option value="제주">제주</option>
        <option value="충남">충남</option>
        <option value="충북">충북</option>
      </select>
    </div>
  );
}

export default SelecBar;
