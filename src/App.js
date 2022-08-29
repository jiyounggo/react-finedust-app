import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Tab from "./components/Tab.js";
import Login from "./pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "./redux/user";
function App() {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      loginUser({
        id: localStorage.getItem("ID"),
        pw: localStorage.getItem("PW"),
        sidoName: "전국",
      })
    );
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <Tab></Tab>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
const Footer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  max-width: 600px;
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 50px;
  background-color: white;
  justify-content: space-between;
  margin: 0 auto;
  div {
  }
`;
const Bar = styled.div`
  display: flex;
  justify-content: center;
`;
export default App;
