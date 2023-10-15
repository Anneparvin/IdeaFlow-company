import React from 'react';
import './Home.css'


const Home = () => {
    return (
      <div className='flex justify-between text-white max-w-5xl mx-auto mt-24 animate-pulse'>
          <div className='space-y-8'>
         <h1 className='text-white font-bold text-4xl ml-6'><span className='text-5xl text-amber-600'>Adolf "Adi" Dassler</span> who made sports shoes in his mother's scullery or laundry</h1> 
         <p className='text-white text-left ml-6'>Adidas AG is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world.</p> 
         <div className='flex justify-around w-30 mt-16 static items-center'>
           <a className='button px-6 py-3 bg-teal-400 font-bold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-700' href="https://ideaflow.app/" target="_blank">Try Adidas Notes</a> 
           <a className='text-teal-400 font-bold' href="https://apps.apple.com/us/app/ideaflow-notes/id6463830566" target="_blank"> iOS</a> 
           <a className='text-teal-400 font-bold'  href="https://zesty-echo-8fc.notion.site/Ideaflow-Onboarding-Quickstart-Guide-34f45fb3dd9f49e381cd161c32afa94e" target="_blank">Guide</a> 
           <a className='text-teal-400 font-bold'  href="https://twitter.com/IdeaFlowGraphs" target="_blank">Twitter</a> 
           <a className='text-teal-400 font-bold'  href="https://kaib430d7vl.typeform.com/to/cg7ZCvD9" target="_blank">NewsLetter</a> 
            
            </div> 
        </div>
        <div className='w-full gap-x-8 gap-y-4'>
        <img src='https://i.ibb.co/RB8JMHf/5efd71ad87946214f286c20b-blue-face-p-800-removebg-preview.png' alt=''/>
        </div>
      </div>
    );
};

export default Home;