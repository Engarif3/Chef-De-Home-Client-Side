import React from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/2.jpg";
import s3 from "../assets/3.jpg";
import s4 from "../assets/4.jpg";
import s5 from "../assets/5.webp";
import s6 from "../assets/6.jpg";
import s7 from "../assets/paris.jpg";
import { Container } from "react-bootstrap";

const Section3 = () => {
  return (
    <Container className=" p-5 rounded-4" style={{backgroundImage:`url(${s7})`}}>
        
        <h2 className="fst-italic text-white text-center mb-5"> Best Desserts in Paris to Try </h2>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-75 h-75 rounded-4" src={s1} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3 className=" fw-bolder  d-inline rounded-2 px-2">Tarte Tatin</h3>
            <p>A classic French dessert made with caramelized apples and puff pastry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-75 h-75 rounded-4" src={s2} alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3 className=" fw-bolder  d-inline rounded-2 px-2">Crème brûlée</h3>
            <p>A creamy dessert with a caramelized sugar topping, often flavored with vanilla or other spices.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-75 h-75 rounded-4" src={s3} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3 className=" fw-bolder  d-inline rounded-2 px-2">Profiteroles</h3>
            <p>A dessert consisting of choux pastry balls filled with cream and often topped with chocolate sauce.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-75 h-75 rounded-4" src={s4} alt="Fourth slide" />
          </div>
          <Carousel.Caption>
            <h3 className=" fw-bolder  d-inline rounded-2 px-2">Clafoutis</h3>
            <p>A French dessert made with fruit (usually cherries) and a custard-like batter.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-75 h-75 rounded-4" src={s5} alt="Fifth slide" />
          </div>
          <Carousel.Caption>
            <h3 className=" fw-bolder  d-inline rounded-2 px-2">Madeleines</h3>
            <p>A small sponge cake with a shell-like shape, often flavored with lemon or almond.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-75 h-75 rounded-4" src={s6} alt="Sixth slide" />
          </div>
          <Carousel.Caption>
            <h3 className=" fw-bolder  d-inline rounded-2 px-2">Calisson</h3>
            <p>A traditional French candy made with ground almonds and candied fruit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Section3;
