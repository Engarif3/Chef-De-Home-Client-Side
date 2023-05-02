import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              navigate(from, { replace: true })
          })
          .catch(error => {
              console.log(error);
          })
  }

  return (
    <div>
  
      <Container>
      <div className=' w-50 border m-auto mt-4 rounded bg-light'>
      <h4 className="text-center mt-4">Please Login.</h4>
        <Form className="w-50  m-auto p-4" onSubmit={handleLogin}>
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
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <br />
          <Form.Text className="text-danger">
            Don't Have An Account? <Link to={"/register"}>Register</Link>
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

export default Login;
