"use client";
import React from 'react'

export default function Footer() {
    return (
        <main>
            <section className='w-full bg-[#1a1a1a] text-white '>
                <footer className="bg-black text-white  py-16 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                        <div>
                            <div className="flex space-x-4 mb-6">

                                <span>△</span>
                                <span>▽</span>
                                <span>◯</span>
                                <span>⟁</span>
                                <span>⌇</span>
                            </div>
                            <address className="not-italic leading-6 mb-4">

                                <p className='text-xl'>Pune, Maharashtra 411001</p>
                            </address>
                            <p className="mb-2 text-xl ">
                                <a href="mailto:siddhibarge383@gmail.com" className="underline hover:text-gray-300">
                                    siddhibarge383@gmail.com
                                </a>
                            </p>
                            <p className='text-xl'>
                                <a href="tel:+917276015176" className="underline hover:text-gray-300">
                                    +91 72760151716
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* <div>
                                <h4 className="font-semibold text-lg mb-2">Programs</h4>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Online</a></li>
                                    <li><a href="#" className="hover:underline">In Person</a></li>
                                    <li><a href="tel:+9172760151716" className="hover:underline">Contact</a></li>
                                </ul>
                            </div> */}
                            <div className="mt-6">
                                <h4 className="font-semibold text-xl mb-2">Follow</h4>
                                <ul className="space-y-1">
                                    <li><a href="https://www.instagram.com/sidd_liftzz?igsh=N3dwb3ExaTdwbWhn" className="hover:underline text-xl ">Instagram</a></li>
                                    <li><a href="https://wa.me/9172760151716" className="hover:underline text-xl ">WhatsApp</a></li>
                                </ul>
                            </div>
                        </div>


                        <div>
                            <h4 className="text-3xl font-bold mb-2">Stay Informed</h4>
                            <p className="text-gray-400 mb-4 text-xl ">Sign up with your email address to receive updates & fitness tips.</p>
                            <div className="flex mb-2 text-xl ">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="px-4 py-2 w-full bg-white text-black rounded-l-md text-xl "
                                />
                                <button className="bg-white text-black text-xl px-4 py-2 font-semibold rounded-r-md hover:bg-gray-200">
                                    Sign Up
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">We respect your privacy.</p>

                            {/* <div className="mt-6 space-y-2 flex flex-col gap-1">
                                <button className='px-5 py-2 border-2 text-white  border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition font-semibold'>ONLINE</button>
                                <button className='px-5 py-2 border-2 text-white  border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition font-semibold'>IN PERSON</button>
                            </div> */}
                        </div>
                    </div>

                    <div className="text-center text-gray-500 text-sm mt-12">
                        © {new Date().getFullYear()} ElevateUp — Siddhi Barge. All rights reserved.
                    </div>
                </footer>

            </section>
        </main>
    )
}
