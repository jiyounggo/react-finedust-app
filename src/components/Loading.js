import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
