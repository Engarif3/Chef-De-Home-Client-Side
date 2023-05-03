import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import RecipeName from "./ReceipeName";
import { Container } from "react-bootstrap";

const ViewRecipe = () => {
  const { id } = useParams();
  const recipesData = useLoaderData();
  const detail = recipesData[0];

  const { name, image, experience, recipes, likes, bio } = detail;

  return (
    <div  >
      <div className=" " style={{height: '500px', backgroundColor:"rgb(47, 79, 79)"}}>
        <Container>
        <div className="d-flex justify-content-between  text-white align-items-center ">
          <div className="w-50 p-5">
            <h4 className="text-center fst-italic text-danger ">{name}</h4>
            <p>{bio}</p>
            <p> <span className="fw-bold">Number of Likes :</span>  {likes}</p>
            <p><span className="fw-bold">Number of Recipes :</span> {recipes}</p>
            <p><span className="fw-bold">Years of Experience :</span> {experience}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center mr-4" style={{height: '400px'}}>
            <img  src={image} alt="" className="w-100 h-100 mt-5 rounded-4 mr-4" />
          </div>
        </div>
        </Container>
        
      </div>

      <div className="my-4 d-flex align-items-center justify-content-center ">
        <div>
          {recipesData.map((chef) => (
            <div
              key={chef.id}
              className="my-4 d-flex align-items-center justify-content-center gap-2"
            >
              {chef.recipe_details.map((recipe) => (
                <RecipeName
                  key={recipe.name}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  cookingMethod={recipe.cooking_method}
                  rating={recipe.rating}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
