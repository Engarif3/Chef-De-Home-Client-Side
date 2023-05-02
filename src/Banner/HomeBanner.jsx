import React from 'react';
import img from '../assets/img-1.jpg'
import {Container} from "react-bootstrap";

const HomeBanner = () => {
    return (
        <div>
            <img src={img} alt="" className='w-100'/>
        </div>
    );
};

export default HomeBanner;