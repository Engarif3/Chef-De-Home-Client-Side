import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import {FaGreaterThan, FaLessThan} from 'react-icons/fa';
import {  Container } from "react-bootstrap";

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
        <Container className='vh-100 d-flex flex-column align-items-center justify-content-center gap-4'>
        <div className='d-flex align-items-center justify-content-center gap-4'>
            {chefs.slice(startIndex, startIndex + 4).map(chef=> <Chef key={chef.id} chef={chef}></Chef>)}
            
        </div>
        <div className='d-flex  gap-2 mt-4'>
                <button className='d-flex justify-content-center align-items-center rounded-circle' style={{height:"40px",width:"40px"}} disabled={startIndex === 0} onClick={handlePrev}>
                    <FaLessThan></FaLessThan>
                </button>
                <button className='d-flex justify-content-center align-items-center rounded-circle' style={{height:"40px",width:"40px"}} disabled={startIndex + 4 >= chefs.length} onClick={handleNext}>
                    <FaGreaterThan></FaGreaterThan>
                </button>
            </div>
        </Container>
        
    );
};

export default Chefs;