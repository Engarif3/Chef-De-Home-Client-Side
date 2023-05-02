import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Container} from "react-bootstrap";

const ViewRecipe = () => {
    const {id} = useParams();
    const details = useLoaderData();
    const detail = details[0];
    const {name, image, experience, recipes, likes, bio } = detail;
  
    return (
        <Container className='mb-4'>
            <p>Details coming soon ...{id}</p> 
            <p className='d-flex justify-content-center'> <img src={image} alt="" className='w-50 h-50 '/> </p>
            <p className='text-center'>{name}</p> 
            <p>{bio}</p>
            <p>Number of Likes:{likes}</p>
            <p>Number of Recipes: {recipes}</p>
            <p>Years of Experience: {experience}</p>
           
        </Container>
    );
};

export default ViewRecipe;