import React from 'react';
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/sm-1.png'

const HomeBanner = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-around" style={{backgroundImage:`url(${img1})`, height: '500px'}}>
      <div className="text-center text-md-start mb-4 mb-md-0">
        <h1 className='text-white fst-italic mb-0 mb-md-4'>
          <span className='text-danger'>Discover</span>  Your Inner Chef.
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-danger'>Bring Out</span>  The Foodie In You .....
        </h1>
      </div>
      <img src={img2} alt="" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default HomeBanner;
