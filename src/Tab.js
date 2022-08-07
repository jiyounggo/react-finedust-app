import React, { useState } from "react";
import styled from "@emotion/styled";
import { Nav } from "react-bootstrap";
import Card from "./Card";
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
      <TabInfoItems>
        <Tabcontent 탭={탭} />
      </TabInfoItems>
    </Tabs>
  );
}

function Tabcontent(props) {
  if (props.탭 == 0) {
    return <div>내지역</div>;
  }
  if (props.탭 == 1) {
    return <Card />;
  }
  if (props.탭 == 2) {
    return <div>즐겨찾기</div>;
  }
}
const Tabs = styled.div`
  margin: 0 auto;
  max-width: 830px;
  margin-top: 50px;

  .nav {
    position:sticky;
    --bs-nav-tabs-border-width: 1.7px;
    margin: 0px 20px;
    --bs-nav-link-color: #474646;
    --bs-nav-link-padding-x: 4.25rem;
    --bs-nav-link-hover-color: #a8a8a8;
  
  .nav-tabs {
   
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-link-active-bg: #f0f0f0;
  }
`;

const TabInfoItems = styled.div`
  .comment {
    margin: 0px 20px;
    display: flex;
    padding-top: 35px;
    padding-bottom: 10px;
  }

  .upload {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 0px 25px;
    button {
      padding: 5px;
      border: 5px solid transparent;
      border-radius: 5px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
  .noticeBtn {
    color: white;
    background-color: #ffda88;
    border: 1px solid white;
    border-radius: 7px;
    padding: 0px 20px;
    margin: 3px 0;
  }
  .noticetxt {
    margin-left: 20px;
  }
  .infoTitle {
    font-size: 1.1em;
    font-weight: 700;
  }
  .infoDate {
    font-size: 0.9em;
  }
  .info_comment {
    display: flex;
    justify-content: space-between;
    border-top: 1.5px solid #e6e6e6;
    align-items: center;
    text-align: center;
  }

  .info_list {
    margin: 0px 20px;
  }
  .info_user {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 15px 15px;
    font-size: 1.2em;

    .user {
      display: flex;
      align-items: center;
      margin-right: 50px;
      .userImg {
        width: 35px;
        margin-right: 10px;
      }
    }
  }
  .usertitle {
    text-align: left;
    .text_top {
      font-size: 0.85em;
      font-weight: 400;
      color: #474747;
    }
  }
  .text_bottom {
    font-size: 0.77em;
    color: #474747;
    margin-top: 5px;
  }
  .commentBtn {
    width: 120px;
  }
  .commentInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 1px solid #bdbdbd;
    border-radius: 100%;
    span {
      color: #7a7a7a;
      font-size: 0.85em;
      font-weight: 600;
    }
  }
  .moreBtn {
    display: flex;
    justify-content: center;
    button {
      border: 1.3px solid #e6e6e6;
      border-radius: 5px;
      padding: 5px 60px;
      background-color: white;
    }
    margin: 10px;
  }
`;

export default Tab;
