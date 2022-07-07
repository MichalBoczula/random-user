import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form } from "react-bootstrap";
import Context from "./Context";

function InputForm() {
  const { setGet, setAmount } = useContext(Context);

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGet(true);
  };

  return (
    <Col className="d-flex justify-content-center">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="How many people do you want meet?"
            onChange={handleChangeAmount}
          />
        </Form.Group>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Find
        </Button>
      </Form>
    </Col>
  );
}

export default InputForm;
