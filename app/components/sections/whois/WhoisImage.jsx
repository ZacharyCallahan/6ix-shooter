import Image from 'next/image';
import React from 'react';

const WhoisImage = ({ src, alt }) => {
    return (

            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="shadow-sm shadow-gray-600 border-2 border-gray-400 rounded-sm  hover:scale-105 transition duration-300 ease-in-out "
            />

    );
};

export default WhoisImage;
