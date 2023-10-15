import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='flex flex-row text-white space-x-10 space-y-16 card'>
            <div className='w-2/5 mx-auto ml-72 mt-16'>
                <img className='w-40' src='https://i.ibb.co/GC3v328/download-removebg-preview.png' alt='pic'/>
            </div>
            <div className='flex flex-row w-full justify-evenly'>
            <div className="flex flex-col space-y-4">
			<h2 className="font-medium">Getting started</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Release Notes</a>
				<a rel="noopener noreferrer" href="#">Upgrade Guide</a>
				<a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
				<a rel="noopener noreferrer" href="#">Optimizing for Production</a>
				<a rel="noopener noreferrer" href="#">Browser Support</a>
				<a rel="noopener noreferrer" href="#">IntelliSense</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Utility-First</a>
				<a rel="noopener noreferrer" href="#">Responsive Design</a>
				<a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
				<a rel="noopener noreferrer" href="#">Dark Mode</a>
				<a rel="noopener noreferrer" href="#">Adding Base Styles</a>
				<a rel="noopener noreferrer" href="#">Extracting Components</a>
				<a rel="noopener noreferrer" href="#">Adding New Utilities</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Customization</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Configuration</a>
				<a rel="noopener noreferrer" href="#">Theme Configuration</a>
				<a rel="noopener noreferrer" href="#">Breakpoints</a>
				<a rel="noopener noreferrer" href="#">Customizing Colors</a>
				<a rel="noopener noreferrer" href="#">Customizing Spacing</a>
				<a rel="noopener noreferrer" href="#">Configuring Variants</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
			</div>
            <div className="flex justify-center px-6 pt-12 text-sm">
		<span className="text-gray-600">© Copyright 1986. All Rights Reserved.</span>
	</div>
		</div>
            </div>
           
        </div>
    );
};

export default Footer;