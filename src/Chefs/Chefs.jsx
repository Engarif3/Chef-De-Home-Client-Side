import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const Chefs = () => {

     const chefs = useLoaderData();
     console.log(chefs)
    return (
        <div className='d-flex align-items-center justify-content-center gap-4'>
            {chefs.map(chef=> <Chef key={chef.id} chef={chef}></Chef>)}
            
        </div>
    );
};

export default Chefs;