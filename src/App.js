import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Card from "./AllLocation";
import All from "./All";
import Star from "./Star";
import SelecBar from "./SelectBar";
import Tab from "./Tab.js";
import Register from "./Register";
import Login from "./Login";

function App() {
  let [move, setmove] = useState(0);
  const navigate = useNavigate();
  const movepage = (page) => {
    setmove(page);
    navigate(`/${page}`);
  };
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
