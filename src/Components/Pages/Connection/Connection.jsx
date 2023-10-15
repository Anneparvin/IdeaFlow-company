import React from 'react';




const Connection = () => {
    
    return (
        <div className='flex max-w-4xl mx-auto text-white mt-16 space-y-16'>
            <div className='w-full'> 
                <img src='https://i.ibb.co/Jmd97bQ/download.jpg' alt='pic'/>
               
            </div>
            
        
            <div className='w-60 align-bottom brightness-100'>
                <h2 className='text-4xl font-bold'>Connecting <br/> people with matching <br/> puzzle pieces</h2>
                <hr className='w-60 align-baseline h-1 bg-slate-50 mt-3 mb-6'/>
                <p className='mt-8 italic'>There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?
                    <br /> <p className='mt-6 italic'>
                    - Sir Tim Berners-Lee, Creator of the Web
                    </p>
                </p>
            </div>
        </div>
    );
};


export default Connection;