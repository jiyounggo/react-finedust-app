import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  img {
    width: 100px;
  }
  p {
    color: white;
  }
  .bgcolor1 {
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    background-color: green;
  }
  .bgcolor2 {
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    background-color: yellow;
  }
  .bgcolor3 {
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    background-color: red;
  }
  .header {
    display: flex;
    justify-content: flex-end;
    height: 50px;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .stationName {
    display: flex;
    margin-top: 10px;
    p {
      font-size: 20px;
      margin: 0 10px;
    }
  }
  .stateTxt {
    margin-top: 10px;
  }
  select {
    margin: 0 auto;
    background-color: black;
  }

  button {
    border: none;
    background-color: transparent;
    p {
      margin: 0;
      font-size: 40px;
    }
  }
`;

export { Container };
