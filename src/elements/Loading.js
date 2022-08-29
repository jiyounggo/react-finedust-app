import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import styled from "@emotion/styled";

function Loading() {
  return (
    <Load>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Load>
  );
}

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
`;
export default Loading;
