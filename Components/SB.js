"use client";
import React from 'react';

export default function SB() {
    return (
        <main>
            <section className='w-full h-full flex items-center justify-center bg-[#1a1a1a] p-10'>
                <div className='w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-10'>

                
                    <div className='flex-1 flex flex-col gap-6'>
                        <h2 className='text-2xl md:text-3xl font-bold text-white'>
                            Why Should People Choose <br />ElevateYou Services
                        </h2>

                        <div className='space-y-4 text-sm md:text-base'>
                            <div className='flex items-start gap-3'>
                                <span className='text-white text-lg'>✔</span>
                                <div>
                                    <h3 className='font-semibold text-white'>Personal Training</h3>
                                    <p className='text-white'>
                                        Our personal trainers can help you create a personalized fitness plan and track your progress.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3'>
                                <span className='text-white text-lg'>✔</span>
                                <div>
                                    <h3 className='font-semibold text-white'>Expert Trainer</h3>
                                    <p className='text-white'>
                                        Our gym is proud to offer a team of highly skilled and certified trainers to help you achieve your goals.
                                    </p>
                                </div>
                            </div>

                            {/* <div className='flex items-start gap-3'>
                                <span className='text-white text-lg'>✔</span>
                                <div>
                                    <h3 className='font-semibold text-white'>Flexible Time</h3>
                                    <p className='text-white'>
                                        We offer many fitness classes during off-peak hours, such as early morning or late evening.
                                    </p>
                                </div>
                            </div> */}
                        </div>

                        <button className="px-5 py-2 border-2 text-white bg-[#1a1a1a] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition">
                            Join Now
                        </button>
                    </div>

                    <div className='flex-1 relative flex justify-center items-center'>
                        <img
                            src='/SB_Img.png'
                            alt='A woman working out representing ElevateYou services'
                            className='w-full max-w-sm rounded-lg object-cover'
                        />

                        <div className='absolute top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-md shadow-md'>
                            ❤️ 70 bpm<br />Heart Rate
                        </div>

                        <div className='absolute bottom-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-md shadow-md'>
                            🔥 24%<br />Fat Burning
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
