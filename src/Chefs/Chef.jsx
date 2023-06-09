import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from 'react-icons/fa';


const Chef = ({ chef }) => {
  const {id, name, image, experience, recipes, likes } = chef;
  return (
    <div>
      <div
        className="m-auto border border-2 rounded-4 border-text-danger "
        style={{
          width: "16rem",
          height: "26rem",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        

        <img
          className="img-fluid w-100 h-50 mx-auto p-1 rounded-4-top"
          src={image}
          alt=""
          style={{ borderRadius: "15px 15px 0 0" }}
        />
       

        <div
          style={{
            position: "absolute",
            bottom: "0",
            color: "white",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10rem",
          }}
        >
          <div className=" mb-4  " style={{ lineHeight: 1 }}>
            <h5 className="text-center text-danger">{name}</h5>
            <div>
              <p> Years of Experience: {experience}</p>
              <p>Number of Recipes: {recipes}</p>
              <p className="p-0"><FaRegThumbsUp className="mb-1"></FaRegThumbsUp> : {likes}</p>
            </div>
            <div className="d-flex justify-content-center">
              <Link className="w-75 mb-2" to={`chef/${id}`}>
                <Button  variant="primary">
                  View Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
