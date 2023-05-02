import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import {FaGreaterThan, FaLessThan} from 'react-icons/fa';
import {  Container } from "react-bootstrap";
import HomeBanner from '../Banner/HomeBanner';

const Chefs = () => {

     const chefs = useLoaderData();
     const [startIndex, setStartIndex] = useState(0);

     const handleNext = () => {
         setStartIndex(startIndex + 1);
     };
 
     const handlePrev = () => {
         setStartIndex(startIndex - 1);
     };
    return (
        <div>
        <HomeBanner></HomeBanner>
        <Container className='my-4 d-flex flex-column align-items-center justify-content-center gap-4 '>
            <h2 className='fw-bold'>Chefs who took Cooking to another level.</h2>
        <div className='d-flex align-items-center justify-content-center gap-4 p-4 border rounded-4'>
            {chefs.slice(startIndex, startIndex + 4).map(chef=> <Chef key={chef.id} chef={chef}></Chef>)}
            
        </div>
        <div className='d-flex  gap-2 mt-2 mb-2 '>
                <button className='d-flex justify-content-center align-items-center rounded-circle bg-primary' style={{height:"40px",width:"40px"}} disabled={startIndex === 0} onClick={handlePrev}>
                    <FaLessThan className='text-danger'></FaLessThan>
                </button>
                <button className='d-flex justify-content-center align-items-center rounded-circle bg-primary' style={{height:"40px",width:"40px"}} disabled={startIndex + 4 >= chefs.length} onClick={handleNext}>
                    <FaGreaterThan className='text-danger'></FaGreaterThan>
                </button>
            </div>
        </Container>
        </div>
        
    );
};

export default Chefs;