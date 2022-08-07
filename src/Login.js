import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const navigate = useNavigate();
  console.log(localStorage.getItem("ID"));
  console.log(localStorage.getItem("PW"));
  console.log(Email);
  const getid = () => {
    if (
      localStorage.getItem("ID") == Email &&
      localStorage.getItem("PW") == PW
    ) {
      alert("로그인완료");
      navigate(`/`);
    } else {
      alert("아디비번다름");
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
        <select>
          <option>서울</option>
          <option>대구</option>
          <option>충남</option>
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
