/* eslint-disable react/no-unescaped-entities */
import AppFeature1 from '@/public/app_photos/app-feature-1.png';
import AppFeature2 from '@/public/app_photos/app-feature-2.png';
import AppFeature3 from '@/public/app_photos/app-feature-3.png';
import AppFeature4 from '@/public/app_photos/app-feature-4.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AppSection = () => {
    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center text-primary-gray mb-6">
                    WHAT'S INSIDE THE 6IXSHOOTER ACADEMY
                </h2>
                <p className="text-2xl text-center mb-8">
                    Transform your shooting game with our tailor-made training videos that cover every aspect of your shooting form, release, warm-up, practice, daily training, mindset, and accuracy.
                </p>

                {/* App features */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className=" flex gap-4 flex-wrap justify-center">
                        <Image src={AppFeature1} alt="Feature 1" className="rounded-sm shadow-sm shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                        <Image src={AppFeature2} alt="Feature 2" className="rounded-sm shadow-sm shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center" >
                        <Image src={AppFeature3} alt="Feature 3" className="rounded-sm shadow-sm shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                        <Image src={AppFeature4} alt="Feature 4" className="rounded-sm shadow-sm shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={250} height={200} />
                    </div>
                </div>


                <h3 className="text-3xl font-semibold text-center text-primary-gray mb-4">
                    Track Your Progress with Daily Workouts, Drills & Challenges
                </h3>
                <p className="text-center mb-8 text-xl">
                    Join our exclusive private group and work directly with me and other passionate basketball players who are dedicated to improving their skills and taking their game to the next level.
                </p>

                {/* Call to Action */}
                <div className="text-center">
                    <Link href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"} className="px-6 py-3 bg-6sixshooter-blue text-white text-2xl font-bold rounded-sm shadow-sm shadow-gray-600 border-2 border-gray-400 hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Download the App
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AppSection;
