import React from "react";

function RecipeName(props) {
  return (
    <div>
      <div className="border" style={{width:"12rem"}}>
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
        <p>Rating: {props.rating}</p>
      </div>
    </div>
  );
}

export default RecipeName;
