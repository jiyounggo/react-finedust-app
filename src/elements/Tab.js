import React, { useState } from "react";
import styled from "@emotion/styled";
import { Nav } from "react-bootstrap";
import AllLocation from "../pages/AllLocation";
import BookMark from "../pages/BookMark";
import MyLocation from "../pages/MyLocation";
function Tab() {
  let [탭, 탭변경] = useState(0);

  return (
    <Tabs>
      <Nav variant="tabs" defaultActiveKey="link0" className="nav">
        <Nav.Item className="navItems">
          <Nav.Link
            className="navItem"
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            내지역보기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItems">
          <Nav.Link
            className="navItem"
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            전체시도보기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItems">
          <Nav.Link
            className="navItem"
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            즐겨찾기
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <>
        <Tabcontent 탭={탭} />
      </>
    </Tabs>
  );
}

function Tabcontent(props) {
  if (props.탭 == 0) {
    return <MyLocation />;
  }
  if (props.탭 == 1) {
    return <AllLocation />;
  }
  if (props.탭 == 2) {
    return <BookMark />;
  }
}
const Tabs = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .nav {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 650px;
  }
  .navItem {
    padding: 20px 50px;
  }
`;

export default Tab;
