import React from 'react';

const GetFlow = () => {
    return (
        <div className='lg:max-w-5xl w-full mx-auto'>
            <h1 className='text-white text-3xl text-center mt-16'>Backed by world-class investors and partners</h1>
         <div className='flex lg:flex-row flex-col justify-between lg:gap-2 gap-4 mt-8 lg:py-6 lg:px-10 px-3 py-4 items-center backdrop-hue-rotate-90 bg-white/10 shadow-lg lg:animate-bounce'>
           
                <img className='w-20' src='https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47c6178fd2b29210de_first%20round.png' alt='pic'/>
                <img className='w-44' src='https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47257981290f6013fd_8vc%20white.png' alt='pic'/>
                <img className='w-48' src='https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f473672ef81aad53378_startx.png' alt='pic'/>
                <h1 className='text-white w-44 text-4xl'>
                    +33 More
                </h1>
            
            </div>   
        </div>
    );
};

export default GetFlow;