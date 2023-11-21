'use client'
import { StarIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DownloadButton from '../DownloadButton';

const wrap = (index, length) => {
    if (length === 0) return 0; // Avoid division by zero
    index = index % length;
    if (index < 0) index += length;
    return index;
};
const testimonials = [
    {
        id: 1,
        name: 'D Patron',
        date: '04/21/2023',
        title: 'Basketball Training Success',
        review: 'My son loves this basketball training! My 13 year old son just had his first game after training with the app after only 3 weeks. He had 19 points with 3 out of 4, 3 pointers!! I can’t believe how good his shot got!',
        rating: 5,
    },
    {
        id: 2,
        name: 'HeyImDanIzzo',
        date: '07/04/2023',
        title: 'Quick Progress',
        review: 'I’ve been using the 6ix Shooter Training program for about a month now and I already see a ton of improvement in my ability to shoot the ball. I learned a lot of different...',
        rating: 5,
    },
    {
        id: 3,
        name: 'Joeliente',
        date: '03/31/2023',
        title: 'Rock solid program',
        review: 'The techniques and drills have been helpful in not only improving my own coaching, but also for my son who is aiming to make it into the big league one day. We appreciate the w...',
        rating: 5,
    },


];

const averageRating = 4.8
const totalRatings = 26
const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const SuccessStories = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1); // Change page every few seconds
        }, 6000); // Change 3000 to your desired interval in milliseconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [page]);
    const testimonialIndex = wrap(page, testimonials.length);

    return (
        <section className="bg-primary-gray py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Overall Ratings Summary */}
                <div className="text-white text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold">6ixShooter Academy Training</h2>
                    <div className="flex justify-center items-center mt-4  transition duration-300 ease-in-out hover:scale-105 ">
                        <span className="text-3xl md:text-5xl font-bold">{averageRating.toFixed(1)}</span>
                        <div className="flex ml-2">
                            {Array.from({ length: 5 }, (_, i) => (
                                <StarIcon key={i} className={`w-12 h-12 ${i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                        </div>
                    </div>
                    <p className="mt-1">{totalRatings} Ratings and Reviews</p>
                </div>
                {/* Individual Testimonials */}
                <h3 className="text-3xl md:text-4xl font-extrabold text-center text-6ixshooter-blue mb-5">
                    Our Success Stories
                </h3>
                <div className="relative overflow-hidden">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 60 },
                            opacity: { duration: 0.3 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className='flex justify-center items-center h-96 sm:h-72 '
                    >
                        {/* Testimonial card */}
                        <div className="border-2 border-gray-400 testimonial-card bg-gray-100 p-4 shadow-md shadow-gray-600 rounded-md w-5/6 md:w-2/3 transition duration-300 ease-in-out hover:scale-105 h-fit">
                            {/* Replace this with your testimonial content */}
                            <div className="flex items-center mb-1">
                                {Array.from({ length: testimonials[testimonialIndex].rating }, (_, i) => (
                                    <StarIcon key={i} className="text-yellow-400 w-8 h-8 " />
                                ))}
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{testimonials[testimonialIndex].title}</h4>
                            <p className="text-gray-600 mb-4">{testimonials[testimonialIndex].review}</p>
                            <p className="text-gray-500 text-sm">{testimonials[testimonialIndex].name} - <span className="font-semibold">{testimonials[testimonialIndex].date}</span></p>
                        </div>
                    </motion.div>
                </div>
                {/* Call to Action Button */}
                <div className="flex justify-center mt-6">
                    <DownloadButton
                        href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"}
                        content={"Join The Academy Today"}
                        textSize={"large"}
                    />

                </div>

            </div>
        </section>
    );
};

export default SuccessStories;
