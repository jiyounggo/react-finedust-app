import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sidoName } from "./redux/user";
function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const navigate = useNavigate();
  const [select, setselect] = useState("");
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const selectoption = (e) => {
    setselect(e.target.value);
  };
  const getid = () => {
    if (
      localStorage.getItem("ID") == Email &&
      localStorage.getItem("PW") == PW
    ) {
      dispatch(
        sidoName({
          id: localStorage.getItem("ID"),
          pw: localStorage.getItem("PW"),
          sidoName: select,
        })
      );
      console.log(user);
      alert("로그인완료");
      navigate(`/`);
    } else {
      alert("아이디를 확인해주세요");
    }
  };
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        ></input>
      </div>
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
      <div>
        <button onClick={() => getid()}>로그인</button>
        <button
          onClick={() => {
            localStorage.setItem("ID", Email);
            localStorage.setItem("PW", PW);
            alert("회원가입완료");
          }}
        >
          회원가입
        </button>
      </div>
    </>
  );
}

export default Login;
