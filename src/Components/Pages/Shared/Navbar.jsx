import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
          <header className="text-white max-w-screen mx-auto p-4 fixed top-0 left-0 right-0 bg-black bg-gradient-to-r from-cyan-900 to-black">
	<div className="container flex justify-between h-16 mx-auto">
		<div rel="noopener noreferrer" href="home" aria-label="Back to homepage" className="flex items-center p-2">
			<img className="w-32" src='https://i.ibb.co/Lt3sT9s/5ef987561883fad47e90211c-Ideaflow-white-1-3x-removebg-preview-1.png' alt='pic'/>
		</div>
		<ul className="items-stretch hidden space-x-3 p-4 md:flex bg-gradient-to-r from-blue-500 to-transparent hover:from-pink-500 hover:to-blue-700 rounded-lg">
			<li className="flex">
				<a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 dark:border-transparent nav-link">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent nav-link text-teal-400">we're Hiring! JS, IOS +</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400 nav-link">Contact</a>
			</li>
			
		</ul>
		
	</div>
</header>  
        </div>
    );
};

export default Navbar;