"use client";
import React from 'react';

export default function SB() {
    return (
        <main>
            <section className='w-full w-[1440px] h-full flex items-center justify-center bg-[#1a1a1a] p-12'>
                <div className='w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-12'>

                    {/* Left Section */}
                    <div className='flex-1 flex flex-col gap-8'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white'>
                            Why Should People Choose <br />ElevateYou Services
                        </h2>

                        <div className='space-y-6 text-base md:text-lg'>
                            <div className='flex items-start gap-4'>
                                <span className='text-white text-2xl'>✔</span>
                                <div>
                                    <h3 className='font-semibold text-white text-xl'>Personal Training</h3>
                                    <p className='text-white'>
                                        Our personal trainers can help you create a personalized fitness plan and track your progress.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <span className='text-white text-2xl'>✔</span>
                                <div>
                                    <h3 className='font-semibold text-white text-xl'>Expert Trainer</h3>
                                    <p className='text-white'>
                                        Our gym is proud to offer a team of highly skilled and certified trainers to help you achieve your goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a href="#Contact">
                            <button className="px-6 py-3 border-2 text-white bg-[#1a1a1a] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition">
                                Join Now
                            </button>
                        </a>
                    </div>

                    {/* Right Section - Image */}
                    <div className='flex-1 relative flex justify-center items-center'>
                        <div className="relative w-full max-w-md">
                            <img
                                src='/SB_Pro.png'
                                alt='A woman working out representing ElevateYou services'
                                className='w-full rounded-lg object-cover'
                            />

                            {/* Floating Boxes */}
                            <div className='absolute top-6 right-6 bg-white text-black text-sm md:text-base px-5 py-3 rounded-md shadow-lg'>
                                ❤️ 70 bpm<br />Heart Rate
                            </div>

                            <div className='absolute bottom-6 right-6 bg-white text-black text-sm md:text-base px-5 py-3 rounded-md shadow-lg'>
                                🔥 24%<br />Fat Burning
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
