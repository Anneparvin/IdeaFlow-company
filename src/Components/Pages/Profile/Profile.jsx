import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='lg:max-w-6xl w-full mx-auto justify-around flex lg:flex-row flex-col gap-4 mb-16 mt-16 py-4 px-4'>
        <div className='p-6 shadow-md rounded-xl sm:px-12 text-white backdrop-hue-rotate-90 bg-white/10 w-96 card'> 
            <div className="flex flex-row justify-start items-center">
                <div>
                <img src="https://i.ibb.co/3RXLkMh/5efac0a9bd965c6f659d9afb-Avatar-MW.png" alt="" className="w-24 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                </div>
                <div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl ml-5">Marty Weiner</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">Former CTO, Reddit
                           <br/> Adidas Advisor</p>
		</div>
            </div>
            <p className='text-white mt-6'>
            “A key step to realizing the potential<br/> of the Web as a medium for collective<br/> intelligence.”
            </p>
            </div>
        <div className='p-6 shadow-md rounded-xl sm:px-12 text-white backdrop-hue-rotate-90 bg-white/10 w-96 card'>
            <div className="flex flex-row justify-start items-center">
                <div>
                <img src="https://i.ibb.co/Q6RxrQp/5efbe6fc6697d411b88e0cc6-JD.png" alt="" className="w-28 mx-auto rounded-full dark:bg-gray-500 aspect-square advisor-image" />
                </div>
                <div className="my-2 space-y-1">
			<h2 className="text-sm font-semibold sm:text-2xl ml-5 space-y-0">John Devadoss</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">Founding Director,<br/> Microsoft Digital Consulting</p>
		</div>
            </div>
            <p className='text-white mt-6'>
            Adidas is the force multiplier for <br/> business productivity in this new<br/> normal.”
            </p>
            </div>
        <div className='p-6 shadow-md rounded-xl sm:px-12 text-white backdrop-hue-rotate-90 bg-white/10 w-96 card'>
            <div className="flex flex-row justify-start items-center">
                <div>
                <img src="https://i.ibb.co/fqsSRbZ/5efac266b0171beef967fcc0-Avatar-TD.png" alt="" className="w-24 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                </div>
                <div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl ml-5">Tim Draper</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">Founder, DFJ
                           <br/> Adidas Investor</p>
		</div>
            </div>
            <p className='text-white mt-6'>
            “The amount of value that can be<br/> unlocked by connecting the right<br/> people and ideas together is<br/> incredible. I’m very excited for what<br/> Adidas is building”.
            </p>
            </div>
            </div>
       
    );
};

export default Profile;