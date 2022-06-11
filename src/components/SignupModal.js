import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignupModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered rounded>
      <Modal.Header closeButton style={{ backgroundColor: "#fcf8f1" }}>
        <Modal.Title id="contained-modal-title-vcenter">Sign-up To Receive Updates</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fcf8f1" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Get me the latest news" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={props.onHide}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
