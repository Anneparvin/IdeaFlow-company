import React from 'react';
import './Gallery.css'


const Gallery = () => {
    return (
        <div className="image-gallery">
            <hr className='w-full bg-black h-1 mt-4'/>
            <h1 className='text-6xl text-white font-bold mt-8'>Gallery Side</h1>
            <h3 className='font-bold  text-white mt-4'>With Little People figures, toddlers can explore how exciting is the world around them!</h3>
        <p className='text-xl bg-red-700 p-8 w-full rounded-xl font-bold mt-8  text-white'>Get FREE delivery on orders over R800 or Click & Collect nationwide at Toys R Us</p>
           

<section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 bg-black rounded-xl mt-2">
		<img src='https://i.ibb.co/rpFvbVp/Tendulkar-batting-against-Australia-October-2010-1-cropped-removebg-preview.png' alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/ggrmhcx/download-2-removebg-preview.png' />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/Qk7Xk9J/800px-Chaussures-de-Juninho-Pernambucano-avec-les-pr-noms-de-ses-filles-inscrits-dessus-removebg-pre.png' />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/FzdNc1T/top-shoe-brands-world-cover.webp' />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/5jsDMLm/Adidas-Astro-Turfs-removebg-preview-Copy.png' />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/0tMQDxV/1280px-An-Adidas-shoe-removebg-preview.png' />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/GC3v328/download-removebg-preview.png'/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/qMyNd2m/best-adidas-originals-removebg-preview.png'/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src='https://i.ibb.co/mF7X36K/images-removebg-preview.png' />
		<img src='https://i.ibb.co/2Pc6VWD/545863-removebg-preview.png' alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-9''tart-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
            
        </div>
    );
};

export default Gallery;