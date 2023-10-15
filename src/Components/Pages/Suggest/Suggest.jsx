import React from 'react';
import './Suggest.css'

const Suggest = () => {
    return (
        <div className='flex max-w-7xl mx-auto text-white mt-16 ml-96 space-y-8 space-x-16'>
 <div className='w-96 brightness-100 align-middle mt-30'>
                <h2 className='text-4xl font-bold'>THE TREFOIL AND THE OLYMPIC IDEA</h2>
                <hr className='w-72 align-baseline h-1 bg-slate-50 mt-3 mb-6'/>
                <p className='mt-6 italic'>In 1972, the world turned to Germany when the Olympic Games opened in Munich. Just in time for the event, adidas presented a new logo that was here to stay: the Trefoil.
                   <p className='mt-6'>
                   Then, symbolizing performance. Today, the adidas Originals collection stands for lifestyle and street.
                   </p>
                   <button className='button px-6 py-3 bg-teal-400 font-bold rounded-xl mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-700' href="/" target="_blank">Explore Adidas..</button> 
                </p>
            </div>
<div className='w-full'>
    <img className='w-4/5 throwing-image' src='https://i.ibb.co/TR8kQ67/Germany-and-Argentina-face-off-in-the-final-of-the-World-Cup-2014-04-crop-removebg-preview.png' alt='pic'/>
</div>
        </div>
    );
};

export default Suggest;