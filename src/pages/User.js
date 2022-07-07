import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const User = ({ firstName, lastName, email, image, city, street, date }) => {
  return (
    <>
      <Card style={{ maxWidth: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {firstName} {lastName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {city} {street}
          </ListGroupItem>
          <ListGroupItem>{date}</ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
};
export default User;
