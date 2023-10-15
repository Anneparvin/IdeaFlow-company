import React from 'react';
import './Connection.css'




const Connection = () => {
    
    return (
        <div className='flex max-w-4xl mx-auto text-white mt-16 space-y-8'>
            <div className='w-full space-x-12'> 
                <img className="batting-animation" src='https://i.ibb.co/rpFvbVp/Tendulkar-batting-against-Australia-October-2010-1-cropped-removebg-preview.png' alt='pic'/>
               
            </div>
            
        
            <div className='w-60 align-bottom brightness-100'>
                <h2 className='text-4xl font-bold'>Every great story has a beginning</h2>
                <hr className='w-60 align-baseline h-1 bg-slate-50 mt-3 mb-6'/>
                <p className='mt-8 italic'>We started in a wash room and conquered the world. And in between, we’ve scored big and sometimes struggled to reach our goals. We’ve done our best for the best. We’ve improved and grown. Looking ahead to the future, always remembering where we came from. This is our story.
                    <br /> <p className='mt-6 italic'>
                    - Sir Tim Berners-Lee, Creator of the Web
                    </p>
                </p>
            </div>
        </div>
    );
};


export default Connection;