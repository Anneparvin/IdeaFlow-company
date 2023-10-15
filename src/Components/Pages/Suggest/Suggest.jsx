import React from 'react';

const Suggest = () => {
    return (
        <div className='flex max-w-7xl mx-auto text-white mt-16 ml-96 space-y-8 space-x-16'>
 <div className='w-96 brightness-100 align-middle mt-30'>
                <h2 className='text-4xl font-bold'>The auto- <br/>suggest layer<br/> for human <br/> thinking</h2>
                <hr className='w-72 align-baseline h-1 bg-slate-50 mt-3 mb-6'/>
                <p className='mt-6 italic'>Connect fragments of information from siloed sources faster than ever before.
                   <p className='mt-6'>
                   Your organization's collective memory at your fingertips.
                   </p>
                   <button className='button px-6 py-3 bg-teal-400 font-bold rounded-xl mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-700' href="/" target="_blank">Learn More..</button> 
                </p>
            </div>
<div className='w-full'>
    <img className='w-4/5' src='https://i.ibb.co/992MGV5/download-1.jpg' alt='pic'/>
</div>
        </div>
    );
};

export default Suggest;