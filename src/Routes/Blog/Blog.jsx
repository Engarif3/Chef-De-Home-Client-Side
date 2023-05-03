import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="text -center m-auto mt-4">
      <div>
        <h5>
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h5>
        <p className="ps-4">
          A controlled component is a component that is controlled by React
          state, while an uncontrolled component is a component that maintains
          its own internal state.
        </p>
      </div>

      <div>
        <h5>2. How to validate React props using PropTypes. </h5>
        <p className="ps-4">
          <p>React PropTypes validators: </p>
          <p className="ps-4">
            <li>PropTypes.any: The prop can be of any data type.</li>
            <li>PropTypes.bool : The prop should be a Boolean. </li>
            <li>PropTypes.number: The prop should be a number. </li>
            <li>PropTypes.string : The prop should be a string.</li>
            <li>PropTypes.func : The prop should be a function.</li>
            <li>PropTypes.array : The prop should be an array.</li>
          </p>
        </p>
      </div>

      <div>
        <h5>3. Tell us the difference between nodejs and express js.</h5>
        <p className="ps-4">
          NodeJS is the package, which provides the JavaScript run-time
          environment, whereas Express is a framework that sits on top of NodeJS
          and helps us to handle requests and responses.
        </p>
      </div>

      <div>
        <h5>
          4. What is a custom hook, and why will you create a custom hook?
        </h5>
        <p className="ps-4">
          {" "}
          In react, a custom hook is user-defined function that is prefixed with
          the “use” keyword.
        </p>
        <p className="ps-4">
          it can be reused easily, which makes the code cleaner and reduces the
          time to write the code. It also enhances the rendering speed of the
          code as a custom hook does not need to be rendered again and again
          while rendering the whole code.
        </p>
      </div>
    </Container>
  );
};

export default Blog;
