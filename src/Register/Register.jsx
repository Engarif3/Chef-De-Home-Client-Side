import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      

      createUser(email, password)
          .then(result => {
              const createdUser = result.user;
              console.log(createdUser);
              event.target.reset(); 
          })
          .catch(error => {
              console.log(error);
          })
  }

  const handleAccepted = event =>{
      setAccepted(event.target.checked)
  }

    return (
        <div>
      
      <Container>
        <div className=' w-50 border mx-auto mt-4 mb-2  rounded bg-light'>
        <h4 className="text-center mt-2">Please Login.</h4>
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
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
      
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name='accept' label="Accept Terms & Conditions." />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Register
          </Button>{" "}
          <br />
          <Form.Text className="text-danger">
            Already Have An Account? <Link to={"/login"}>Login</Link>
          </Form.Text>
          <Form.Text className="tex-success">
            
          </Form.Text>{" "}
          <Form.Text className="text-danger">
           
          </Form.Text>
        </Form>
            
        </div>
        
      </Container>
    </div>
    );
};

export default Register;