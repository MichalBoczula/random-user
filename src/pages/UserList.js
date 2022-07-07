import React, { useState, useEffect } from "react";
import User from "./User";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    (async function getUsers() {
      await fetch("https://randomuser.me/api/?results=10")
        .then((x) => x.json())
        .then((x) => {
          const data = x.results.map((x) => {
            const { first, last } = x.name;
            const { email } = x;
            const { large: image } = x.picture;
            const { city } = x.location;
            const { name: street } = x.location.street;
            const { date } = x.registered;
            return {
              firstName: first,
              lastName: last,
              email: email,
              image: image,
              city: city,
              street: street,
              date: date,
            };
          });
          setUserList(data);
        })
        .catch((err) => setError(true));
    })();
  }, []);

  return (
    <Row className="d-flex justify-content-around gap-3">
      {userList.map((user, id) => {
        return (
          <Col key={id} className="d-flex justify-content-around">
            <User key={id} {...user}></User>
          </Col>
        );
      })}
    </Row>
  );
}

export default UserList;
