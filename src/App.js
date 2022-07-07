import React, { useState } from "react";
import "./App.css";
import UserList from "./pages/UserList";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Context from "./pages/Context";
import InputForm from "./pages/InputForm";

function App() {
  const [amount, setAmount] = useState(0);
  const [get, setGet] = useState(false);
  return (
    <Context.Provider
      value={{
        amount,
        get,
        setAmount,
        setGet,
      }}
    >
      <Container>
        <Row className="mt-5 mb-5">
          <Col className="d-flex justify-content-center">
            <InputForm></InputForm>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around gap-3">
          <UserList></UserList>
        </Row>
      </Container>
    </Context.Provider>
  );
}

export default App;
