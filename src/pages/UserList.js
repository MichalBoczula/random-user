import React, { useState, useEffect, useContext } from "react";
import User from "./User";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./Context";

function UserList() {
  const [userList, setUserList] = useState([]);
  const { get, amount, setGet } = useContext(Context);
  useEffect(() => {
    if (get) {
      setGet(false);
      (async function getUsers() {
        await fetch(`https://randomuser.me/api/?results=${amount}`)
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
          });
      })();
    }
  }, [get]);

  return userList.map((user, id) => {
    return (
      <Col key={id} className="d-flex justify-content-around">
        <User key={id} {...user}></User>
      </Col>
    );
  });
}

export default UserList;
