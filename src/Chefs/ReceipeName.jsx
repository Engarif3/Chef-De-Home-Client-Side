import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RecipeName(props) {
  const handleClick = (event) => {
    toast("This Recipe added to your favorite list.");
    event.currentTarget.disabled = true;
  };

  return (
    <div>
      <div
        className="border rounded-4 p-4 bg-light "
        style={{ width: "28rem", height: "46rem", position: "relative" }}
      >
        <h4>{props.name}</h4>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <ul>
          {props.cookingMethod.map((cooking) => (
            <li key={cooking}>{cooking}</li>
          ))}
        </ul>
        <p> &nbsp; &nbsp; &nbsp; &nbsp; Rating: {props.rating}</p>
        <Button
          style={{ position: "absolute", bottom: "50px", left: "40px" }}
          variant="primary"
          onClick={handleClick}
        >
          Add to favorite
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RecipeName;
