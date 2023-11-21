/* eslint-disable react/no-unescaped-entities */
import AppFeature1 from '@/public/app_photos/app-feature-1.png';
import AppFeature2 from '@/public/app_photos/app-feature-2.png';
import AppFeature3 from '@/public/app_photos/app-feature-3.png';
import AppFeature4 from '@/public/app_photos/app-feature-4.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DownloadButton from '../DownloadButton';

const AppSection = () => {
    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-primary-gray mb-6">
                    WHAT'S INSIDE THE 6IXSHOOTER ACADEMY
                </h2>
                <p className="text-xl md:text-2xl text-center mb-8">
                    Transform your shooting game with our tailor-made training videos that cover every aspect of your shooting form, release, warm-up, practice, daily training, mindset, and accuracy.
                </p>

                {/* App features */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className=" flex gap-4 justify-center w-1/2 md:w-fit">
                        <Image src={AppFeature1} alt="Feature 1" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                        <Image src={AppFeature2} alt="Feature 2" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                    </div>
                    <div className="flex gap-4 justify-center w-1/2 md:w-fit" >
                        <Image src={AppFeature3} alt="Feature 3" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                        <Image src={AppFeature4} alt="Feature 4" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                    </div>
                </div>


                <h3 className="text-2xl md:text-3xl font-semibold text-center text-primary-gray mb-4">
                    Track Your Progress with Daily Workouts, Drills & Challenges
                </h3>
                <p className="text-center mb-8 text-xl">
                    Join our exclusive private group and work directly with me and other passionate basketball players who are dedicated to improving their skills and taking their game to the next level.
                </p>

                {/* Call to Action */}
                <div className="flex justify-center">
                    <DownloadButton
                        href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"}
                        content={"Download the App"}
                        textSize={"large"}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppSection;
