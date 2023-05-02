import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/sm-2.png";

const Section2 = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <Container className="my-5 border rounded-4">
      <h2 className="text-center mt-4 fst-italic">
        Your Opinion Matters. We will get back to you.
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <img src={image} alt="" />
        <div className="w-100">
          <div className=" w-100 mx-auto mt-4 mb-2 ">
            <Form className="w-50  m-auto py-4" onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone/Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="Enter your number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Feedback</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Write your feedback here."/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Feedback
              </Button>{" "}
              <br />
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
