import React from 'react';

const HireMe = () => {
    return (
        <div className='bg-white text-black p-3 items-center text-center'>
           <h1 className='text-4xl font-bold mt-12'>We're Hiring Key Roles</h1> 
           <p className='font-thin mt-3'>Help us extend the human mind.</p>
           <button className='button px-6 py-3 bg-teal-400 font-bold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-700 mt-4 mb-6 text-white'>Join us or refer someone</button>
        </div>
    );
};

export default HireMe;