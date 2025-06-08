"use client";

import React from 'react';

export default function Homepage() {
    return (
        <main>
            <section className='w-full flex justify-center bg-black'>
                <div className='w-full min-h-screen relative'>


                    <div
                        className='absolute inset-0'
                        style={{
                            backgroundImage: 'url(/Home_BG.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0,
                        }}
                    />


                    <div className='absolute inset-0 bg-black opacity-60 z-10'></div>


                    <div className='relative z-20 w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-start items-center px-10 py-10 gap-6'>

                        <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-10'>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-[#e2dddb] bg-clip-text text-transparent">
                                Sculpt Strength. Define Greatness
                            </h1>
                            <p className='text-base md:text-lg text-white'>
                                ElevateYou Gym: Your Complete Fitness Solution. Discover top-tier fitness equipment and a range of services to build your gym from the ground up.
                            </p>
                            <button
                                className='text-lg md:text-xl px-6 py-3 border-2 rounded-lg transition duration-300 text-[#e2dddb] border-[#e2dddb]'
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#e2dddb';
                                    e.currentTarget.style.color = 'black';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#e2dddb';
                                }}
                            >
                                Get Started
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
