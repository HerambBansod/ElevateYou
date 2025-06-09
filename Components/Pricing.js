"use client";
import React from 'react'

export default function Pricing() {
    return (
        <main>
            <section className='w-full w-[1440px] flex flex-col'>
                <div className='w-full py-16 px-6 flex flex-col items-center gap-20'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-white text-center'>Choose The Best Plan</h2>
                    <p className='text-white text-base md:text-lg text-center max-w-2xl'>
                        Choose a plan that’s right for your growing team. Simple pricing & No hidden charges.
                    </p>

                    <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-12'>

                        <div className='bg-[#2b2b2b] min-h-[500px] rounded-xl p-10 flex flex-col items-center justify-evenly text-white'>
                            <h3 className='text-2xl font-semibold mb-4'>DISCOVER</h3>
                            <p className='text-4xl font-bold mb-4'>₹3000 <span className='text-lg font-normal'>/ Per Month</span></p>
                            <ul className='space-y-3 text-base mb-8'>
                                <li>✔ Personalized Diet Plans</li>
                                <li>✔ Regular Progress Check-ins </li>
                                <li>✔ Supplement Guidance (if needed)</li>
                                <li>✔ Basic Query Support (Monday–Friday)</li>
                            </ul>
                            <button className='px-6 py-3 border-2 text-white bg-[#2b2b2b] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition'>
                                <a href="#Contact">Choose Plan</a>
                            </button>
                        </div>

                        <div className='bg-[#e2dddb] min-h-[500px] rounded-xl p-10 flex flex-col items-center justify-evenly text-black shadow-lg scale-105'>
                            <h3 className='text-2xl font-semibold mb-4'>ENTERPRISE</h3>
                            <p className='text-4xl font-bold mb-4'>₹5000 <span className='text-lg font-normal'>/ Per Month</span></p>
                            <ul className='space-y-3 text-base mb-8'>
                                <li>✔ Personalized Diet Plans</li>
                                <li>✔ Regular Progress Check-ins </li>
                                <li>✔ Supplement Guidance (if needed)</li>
                                <li>✔ Basic Query Support (Monday–Friday)</li>
                                <li>✔ Online Workout Coaching</li>
                                <li>✔ Weekly Progress Monitoring & Adjustments</li>
                                <li>✔ 1-on-1 WhatsApp Support (Mon–Sat)</li>
                                <li>✔ Motivation & Accountability Check-ins</li>
                            </ul>
                            <button className='px-6 py-3 border-2 text-black bg-[#e2dddb] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition'>
                                <a href="#Contact">Choose Plan</a>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
