import logo from "./logo.svg";
import React, { useState, useContext } from "react";
import "./App.css";
import User from "./pages/User";
import UserList from "./pages/UserList";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <UserList></UserList>
      </Container>
    </>
  );
}

export default App;
