import Image from 'next/image';
import React from 'react';

const WhoisImage = ({ src, alt }) => {
    return (
        <div className="w-fit relative  ">
            <div className="z-10 bg-black rounded-sm absolute top-0 left-0 w-full h-full bg-opacity-0 opacity-0 hover:opacity-100  transition-all duration-300 hover:bg-opacity-75 ">
                <div className='p-6'>
                    <h1 className='text-white font-semibold text-3xl pb-6'>Header (PlaceHolder)</h1>
                    <p className='text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae facere consectetur doloremque voluptate animi ad. (PlaceHolder)</p>
                </div>
            </div>
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="shadow-sm shadow-gray-600 border-2 border-gray-400 rounded-sm  hover:scale-105 transition duration-300 ease-in-out "
            />
        </div>
    );
};

export default WhoisImage;
