import React from 'react';
import {  Container } from "react-bootstrap";
import pl1 from '../assets/pl1.png';
import pl2 from '../assets/pl2.png';
import pl3 from '../assets/pl3.png';
import pl4 from '../assets/pl4.png';

const Section1 = () => {

    const style ={height:"325px", width:"340px"}
    return (
        <Container className='mb-5'>
            <h2 className='text-center fst-italic'>Popular Dishes from Top Chefs</h2>
            <div className='d-md-flex d-lg-flex justify-content-center align-items-center'>

            <div><img style={style} src={pl1} alt="" /> <h4 className='text-center'>Classic Coq Au Vin</h4></div>
            <div><img style={style} src={pl2} alt="" /> <h4 className='text-center'>French Gimlet</h4></div>
            <div><img style={style} src={pl3} alt="" /> <h4 className='text-center'>French Beignets</h4></div>
            <div><img style={style} src={pl4} alt="" /> <h4 className='text-center'>Spaghetti Nero </h4></div>
          
            </div>
            <hr  className="border-2"/>
        </Container>
    );
};

export default Section1;