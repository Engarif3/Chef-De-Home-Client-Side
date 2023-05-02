import React from 'react';
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/sm-1.png'


const HomeBanner = () => {
    return (
        <div style={{backgroundImage:`url(${img1})`, height: '500px'}} >
            <div className='d-flex align-items-center justify-content-around'>
            <h1 className='text-white fst-italic'> <span className='text-danger'>Discover</span>  Your Inner Chef. <br /> &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-danger'>Bring Out</span>  The Foodie In You.</h1>
            <img src={img2} alt="" />

            </div>
        </div>
    );
};

export default HomeBanner;