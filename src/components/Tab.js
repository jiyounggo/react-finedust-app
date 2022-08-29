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
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            내지역보기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            전체시도보기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
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
const Tabs = styled.div``;

export default Tab;
