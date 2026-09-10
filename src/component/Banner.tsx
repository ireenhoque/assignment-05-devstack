//import React from 'react';
import BannerImage from './../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center'>
            <div>
                <h1 className='text-5xl font-bold'>Build Your Ideal <br /> <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='text-lg text-[#475569] mt-4'>Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br /> next project.</p>
                <div className='flex gap-4'>
                    <button className='bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white px-4 py-2 rounded-2xl mt-4'>Explore Technologies</button>
                    <button className='px-4 py-2 rounded-3xl mt-4 border border-gray-300 text-black'>Learn More</button>
                </div>
                
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;