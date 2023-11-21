'use client'
import { sendEmailAction } from '@/app/_actions';
import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
    const formRef = React.useRef(null);

    const action = async (data) => {
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        const subject = data.get('subject');

        if (!name || !email || !message) return;

        await sendEmailAction(email, message, name, subject);
        formRef.current.reset();
    }

    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h2>

                <div className="flex flex-col md:flex-row justify-between ">
                    {/* Contact Form */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <form className='space-y-4 flex items-center flex-col' action={action} ref={formRef}>
                            <div className="space-y-4 w-full">
                                <div>
                                    <label htmlFor="name" className="block text-lg">Name</label>
                                    <input type="text" id="name" name='name' placeholder='Name' className="transition duration-300 ease-in-out hover:scale-105 w-full p-2 rounded-md bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-lg">Subject</label>
                                    <input type="text" id="subject" name='subject' placeholder='Subject' className="transition duration-300 ease-in-out hover:scale-105 w-full p-2 rounded-md bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg">Email</label>
                                    <input type="email" id="email" name='email' placeholder='Email' className="transition duration-300 ease-in-out hover:scale-105 w-full p-2 rounded-md bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg">Message</label>
                                    <textarea id="message" name='message' placeholder='Message' rows="4" className="transition duration-300 ease-in-out hover:scale-105 w-full p-2 rounded-md bg-gray-200 text-gray-800 shadow-sm shadow-gray-600"></textarea>
                                </div>
                            </div>
                            <button type='submit' className="block p-1 md:px-3 md:py-2 bg-6ixshooter-blue text-white font-bold rounded-md 
                        md:rounded-md shadow-sm shadow-gray-600  hover:bg-blue-600
                        transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2
                        focus:ring-blue-300 text-2xl">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="md:w-1/2 text-center ">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-4">Get in Touch</h3>
                        <p className="mb-2 text-xl">Feel free to reach out to us via the following channels:</p>
                        <p className="mb-2 text-xl">Email: <a href="mailto:info@6ixshooteracademy.com" className="text-6ixshooter-blue hover:underline">info@6ixshooteracademy.com</a></p>
                        <p className='text-xl'>Phone: <Link href="tel:+18184309202" className="text-6ixshooter-blue hover:underline">+1-818-430-9202</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
