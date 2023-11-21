/* eslint-disable react/no-unescaped-entities */
import AppFeature1 from '@/public/app_photos/app-feature-1.png';
import AppFeature2 from '@/public/app_photos/app-feature-2.png';
import AppFeature3 from '@/public/app_photos/app-feature-3.png';
import AppFeature4 from '@/public/app_photos/app-feature-4.png';
import Image from 'next/image';
import React from 'react';
import WhoIsBulletPoint from './whois/WhoIsBulletPoint';

const SpecialOfferSection = () => {
    return (
        <section className="py-12  bg-primary-gray">
            <div className="text-center ">
                <div className='border-2 rounded-md border-gray-400 bg-gray-100  w-fit shadow-md shadow-gray-600 p-6 lg:mx-auto mb-12 mx-4'>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Now ONLY $39 (Save 60% Special)</h2>
                    <div className='max-w-4xl mx-auto  flex items-center justify-between flex-col md:flex-row'>
                        <div>
                            <p className="text-2xl mb-4">Original Price $99</p>
                            <ol className="text-xl mb-6 space-y-2">
                                <li><strong>Step 1:</strong> Your Name and Email</li>
                                <li><strong>Step 2:</strong> Add Credit Card Info</li>
                                <li><strong>Step 3:</strong> Click Complete Order</li>
                            </ol>

                            <div className="mb-6 text-xl">
                                <p><strong>Item Price</strong></p>
                                <p>6ixShooter Academy Program $39.00 (60% OFF)</p>
                            </div>
                        </div>
                        <div className="mb-8 w-2/3 md:w-1/3">
                            <p><strong>* Denotes mandatory fields</strong></p>
                            {/* Example Form Fields */}
                            <form className="space-y-4">
                                <div >
                                    <label htmlFor="name" className="block text-lg">Name*</label>
                                    <input type="text" placeholder="Full Name" className="transition duration-300 ease-in-out hover:scale-105 w-full p-2 rounded-md bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg">Email*</label>
                                    <input type="email" placeholder="Email" className="transition duration-300 ease-in-out hover:scale-105 w-full p-2 rounded-md bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                                </div>
                                <button className=" w-full
                            block p-2 md:px-3 md:py-2 bg-6ixshooter-blue text-white font-bold rounded-md 
                        md:rounded-md shadow-sm shadow-gray-600  hover:bg-blue-600
                        transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2
                        focus:ring-blue-300 ">Start Order</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center rounded-md max-w-7xl border-2 border-gray-400 bg-gray-100 w-fit shadow-md shadow-gray-600 p-6 xl:mx-auto mx-4 mb-6">
                    <h3 className="text-4xl font-semibold mb-6 underline text-6ixshooter-blue">What's Included Inside:</h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className=" flex gap-4 justify-center w-1/2 md:w-fit">
                            <Image src={AppFeature1} alt="Feature 1" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={150} height={150} />
                            <Image src={AppFeature2} alt="Feature 2" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={150} height={150} />
                        </div>
                        <div className="flex gap-4 justify-center w-1/2 md:w-fit" >
                            <Image src={AppFeature3} alt="Feature 3" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={150} height={150} />
                            <Image src={AppFeature4} alt="Feature 4" className="rounded-md shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:scale-105" width={150} height={150} />
                        </div>
                    </div>

                    <ul className="list-disc text-lg space-y-3 pl-6 flex  text-left flex-col align-text-top">
                        <WhoIsBulletPoint color={"primary-gray"} className={"lg:justify-center"}>
                            <span className='font-semibold'>PRO VIDEO TRAINING:</span> 65+ How-to Videos for elite level shooting.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint color={"primary-gray"} className={"lg:justify-center"}>
                            <span className='font-semibold'>DAILY WORKOUTS & TRACKING:</span> Track progress with our Workout Calendar.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint color={"primary-gray"} className={"lg:justify-center"}>
                            <span className='font-semibold'>WITH COACH:</span> Personal training with Seth McCoy "6ixShooter".
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint color={"primary-gray"} className={"lg:justify-center"}>
                            <span className='font-semibold'>PRIVATE VIP FB GROUP:</span> Join our community for real-time support and training.
                        </WhoIsBulletPoint>
                    </ul>
                    <div className='mt-6 flex gap-6 items-center justify-center'>
                        <Image
                            src="/Seal.webp"
                            alt="6ixShooter Academy App"
                            width={50}
                            height={50}
                            className='transition duration-300 ease-in-out hover:scale-110'
                        />
                        <p className="text-xl mt-4"><span className='font-semibold'>100% Money-Back Guarantee:</span> If you don't see improvement, we'll refund your money 100%.</p>
                    </div>
                    <div className='mb-6 flex gap-6 items-center justify-center'>
                        <Image
                            src="/lock.webp"
                            alt="6ixShooter Academy App"
                            width={50}
                            height={50}
                            className='stransition duration-300 ease-in-out hover:scale-110'
                        />
                        <p className="text-xl mt-6 italic"><span className='font-semibold'>Secure Processing:</span> Each order is processed through a secure, 256-bit encrypted payment processing gateway to ensure your privacy.</p>
                    </div>
                    <Image
                        src="/credit-only.png"
                        alt="6ixShooter Academy App"
                        width={500}
                        height={500}
                        className='mx-auto transition duration-300 ease-in-out hover:scale-105'
                    />
                </div>

            </div>
        </section>
    );
};

export default SpecialOfferSection;
