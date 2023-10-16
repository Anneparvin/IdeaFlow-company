import React from 'react';
import './Home.css'


const Home = () => {
    return (
      <div className='flex lg:flex-row flex-col-reverse justify-between text-white lg:max-w-5xl mx-auto w-full mt-24 animate-pulse lg:p-8 p-4'>
          <div className='space-y-8'>
         <h1 className='text-white font-bold text-4xl ml-6'><span className='text-5xl text-amber-600'>Adolf "Adi" Dassler</span><br/> who made sports shoes in his mother's scullery or laundry</h1> 
         <p className='text-white text-left ml-6'>Adidas AG is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world.</p> 
         <div className='flex lg:flex-row flex-col  justify-around w-30 mt-16 static items-center'>
           <button className='button lg:px-6 lg:py-3 px-1 py-2  bg-teal-400 font-bold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-700 animate-button' href="https://ideaflow.app/" target="_blank">Try Adidas Notes</button> 
           <a className='text-teal-400 font-bold' href="https://apps.apple.com/us/app/ideaflow-notes/id6463830566" target="_blank"> iOS</a> 
           <a className='text-teal-400 font-bold'  href="https://zesty-echo-8fc.notion.site/Ideaflow-Onboarding-Quickstart-Guide-34f45fb3dd9f49e381cd161c32afa94e" target="_blank">Guide</a> 
           <a className='text-teal-400 font-bold'  href="https://twitter.com/IdeaFlowGraphs" target="_blank">Twitter</a> 
           <a className='text-teal-400 font-bold'  href="https://kaib430d7vl.typeform.com/to/cg7ZCvD9" target="_blank">NewsLetter</a> 
            
            </div> 
        </div>
        <div className='w-full gap-x-8 gap-y-4'>
        <img className='rounded-md' src='https://i.ibb.co/JchrRvq/Herzogenaurach-Adidas-2016-removebg-preview.png' alt=''/>
        </div>
      </div>
    );
};

export default Home;