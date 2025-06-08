"use client";
import React from 'react'
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <main>
            <section className='w-full h-full w-[1440px] flex flex-col bg-[#1a1a1a] py-16 px-6'>
                <div className='w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center gap-10 '>

                    <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-6 py-16 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center">Contact Us</h2>

                        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">


                            <div className="flex flex-col gap-6">
                                <h1 className='text-lg font-semibold text-[#ff7846] mb-1'>Social Media</h1>
                                <div className="flex gap-10">
                                    <a href="https://www.instagram.com/sidd_liftzz?igsh=N3dwb3ExaTdwbWhn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-xl">
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://wa.me/9172760151716"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-500 transition text-xl"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                    <a href="tel:+9172760151716" className="hover:text-yellow-400 transition text-xl">
                                        <FaPhoneAlt />
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#ff7846] mb-1">Email</h3>
                                    <p><a href="mailto:siddhibarge383@gmail.com" className="hover:underline">siddhibarge383@gmail.com</a></p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#ff7846] mb-1">Phone</h3>
                                    <p>+91-72760151716</p>
                                </div>
                            </div>


                            <form className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium mb-1">First Name</label>
                                        <input type="text" className="bg-transparent border-b border-white focus:outline-none px-2 py-2" required />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium mb-1">Last Name</label>
                                        <input type="text" className="bg-transparent border-b border-white focus:outline-none px-2 py-2" required />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Email</label>
                                    <input type="email" className="bg-transparent border-b border-white focus:outline-none px-2 py-2" required />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-2">What are you interested in?</label>
                                    <div className="flex flex-wrap gap-2">
                                        {["In Person Training", "Online Programming", "Online Elements Course", "Other"].map((item) => (
                                            <button
                                                type="button"
                                                key={item}
                                                className="px-3 py-1 border border-white rounded-full hover:bg-[#ff7846] hover:text-black text-sm transition"
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Message / Questions</label>
                                    <textarea
                                        rows="4"
                                        className="bg-transparent border-b border-white focus:outline-none px-2 py-2"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 px-6 py-3 bg-[#ff7846] text-black font-semibold rounded-lg hover:bg-white hover:text-black transition"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
