import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
// import ReceipeName from "./ReceipeName";
import RecipeName from "./ReceipeName";

const ViewRecipe = () => {
  const { id } = useParams();
  const recipesData = useLoaderData();
  const detail = recipesData[0];

  const { name, image, experience, recipes, likes, bio } = detail;

  return (
    <Container className="mb-4">
      <div>
        <p>Details coming soon ...{id}</p>
        <p className="d-flex justify-content-center">
          {" "}
          <img src={image} alt="" className="w-50 h-50" />{" "}
        </p>
        <p className="text-center">{name}</p>
        <p>{bio}</p>
        <p>Number of Likes:{likes}</p>
        <p>Number of Recipes: {recipes}</p>
        <p>Years of Experience: {experience}</p>
      </div>

      <div className='my-4 d-flex flex-row align-items-center justify-content-center gap-4 '>

      <div>
        {recipesData.map((chef) => (
          <div key={chef.id}>
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

    </Container>
  );
};

export default ViewRecipe;
