import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h2>

                <div className="flex flex-col md:flex-row justify-between ">
                    {/* Contact Form */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <form className='space-y-4 flex items-center flex-col' >
                            <div className="space-y-4 w-full">

                            <div>
                                <label htmlFor="name" className="block text-lg">Name</label>
                                <input type="text" id="name" className="w-full p-2 rounded-sm bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg">Email</label>
                                <input type="email" id="email" className="w-full p-2 rounded-sm bg-gray-200 text-gray-800 shadow-sm shadow-gray-600" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg">Message</label>
                                <textarea id="message" rows="4" className="w-full p-2 rounded-sm bg-gray-200 text-gray-800 shadow-sm shadow-gray-600"></textarea>
                            </div>
                            </div>
                            <button type='submit' className="px-4 py-2 bg-6ixshooter-blue text-white text-xl font-bold rounded-sm shadow-sm hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 border-2 border-gray-400 shadow-gray-600">
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
