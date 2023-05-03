import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function RecipeName(props) {
  const handleClick = (event) => {
    toast("This Recipe added to your favorite list.");
    event.currentTarget.disabled = true;
  };

  return (
    <div>
      <div
        className="border rounded-4 p-4 bg-light "
        style={{ width: "28rem", height: "42rem", position: "relative" }}
      >
        <h4 className="fst-italic fw-bold text-danger text-center">{props.name}</h4>
        <ul> <h5 className="text-decoration-underline fw-bold">Ingredients:</h5>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <ul> <h5 className="text-decoration-underline fw-bold">Cooking Method:</h5>
          {props.cookingMethod.map((cooking) => (
            <li key={cooking}>{cooking}</li>
          ))}
        </ul>
        <div className="d-flex  align-items-center">
        <p> &nbsp; &nbsp; &nbsp; &nbsp; Rating:</p> 
        <Rating style={{ maxWidth: 100 }} value={props.rating}  readOnly className="pb-3" />
        <p>{props.rating}</p>
        </div>
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
