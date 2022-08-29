import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
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
    height: 70px;
  }

  select {
    margin: 0 auto;
    background-color: black;
  }

  button {
    display: flex;
    justify-content: flex-end;
    border: none;
    padding-bottom: 5px;
    background-color: transparent;
    p {
      font-size: 50px;
    }
  }
`;

export { Container };
