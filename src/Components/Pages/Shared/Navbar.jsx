import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
          <header className="text-white lg:max-w-screen w-full mx-auto lg:p-6 py-12 lg:fixed static lg:top-0 top-0 lg:left-0 lg:right-0 bg-black bg-gradient-to-r from-cyan-900 to-black relative">
	<div className="container flex justify-between h-16 mx-auto">
		<div rel="noopener noreferrer" href="home" aria-label="Back to homepage" className="flex items-center p-2">
			<img className="w-28" src='https://i.ibb.co/GC3v328/download-removebg-preview.png' alt='pic'/>
		</div>
		<ul className="items-stretch space-x-3 p-4 md:flex bg-gradient-to-r from-blue-500 to-transparent hover:from-pink-500 hover:to-blue-700 rounded-lg lg:display absolute inset-y-0 left-0">
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