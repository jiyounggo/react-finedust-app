import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sidoName } from "../redux/user";

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");

  const navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const getid = () => {
    if (
      localStorage.getItem("ID") == Email &&
      localStorage.getItem("PW") == PW
    ) {
      dispatch(
        sidoName({
          id: localStorage.getItem("ID"),
          pw: localStorage.getItem("PW"),
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
        <p>아이디</p>
        <input
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        ></input>
      </div>
      <div>
        <p>비번</p>
        <input
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        ></input>
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
