import React from 'react';

const ContactMe = () => {
    return (
        <section className="w-10/12 flex flex-col md:flex-row h-96  ">
            {/* Left Div */}
            <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center bg-fuchsia-900 shadow-md rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-300">Contact Me</h2>
                <textarea
                    className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                    placeholder="Your Email"
                ></textarea>
                <textarea
                    className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                    placeholder="Your Message"
                ></textarea>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                    Send
                </button>
            </div>

            {/* Right Div */}
            <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center bg-slate-700 text-white rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Get in Touch</h2>
                <p className="mb-2 "> Your Permanent Location: <span className="font-medium">Bogura Bangladesh</span></p>
                <p className="mb-2 "> Your Present Location: <span className="font-medium">Dhaka Bangladesh</span></p>
                <p className="mb-2 ">✉️ Email: <span className="font-medium">khsalarhassan@gmail.com</span></p>
                <p className="mb-2 ">📞 Phone: <span className="font-medium">+8801726798847</span></p>
                <button
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=8801726798847', '_blank')}
                >
                    Chat on WhatsApp
                </button>
            </div>
        </section>
    );
};

export default ContactMe;
