"use client";
import React from 'react'

export default function Pricing() {
    return (
        <main>
            <section className='w-full w-[1440px] flex flex-col'>
                <div className='w-full py-16 px-6 flex flex-col items-center gap-20'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-white text-center'>Choose The Best Plan</h2>
                    <p className='text-white text-sm md:text-base text-center max-w-2xl'>
                        Choose a plan that’s right for your growing team. Simple pricing & No hidden charges.
                    </p>


                    <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>


                        <div className='bg-[#2b2b2b] min-h-[500px] rounded-xl p-8 flex flex-col items-center justify-evenly text-white'>
                            <h3 className='text-xl font-semibold mb-2'>DISCOVER</h3>
                            <p className='text-3xl font-bold mb-2'>₹3000 <span className='text-base font-normal'>/ Per Month</span></p>
                            <ul className='space-y-2 text-sm mb-6'>
                                <li>✔ Personalized Diet Plans</li>
                                <li>✔ Regular Progress Check-ins </li>
                                <li>✔ Supplement Guidance (if needed)</li>
                                <li>✔ Basic Query Support (Monday–Friday)</li>
                            </ul>
                            <button className='px-5 py-2 border-2 text-white bg-[#2b2b2b] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition font-semibold'>
                                Choose Plan
                            </button>
                        </div>


                        <div className='bg-[#e2dddb] min-h-[500px] rounded-xl p-8 flex flex-col items-center justify-evenly text-white shadow-lg scale-105'>
                            <h3 className='text-black text-xl font-semibold mb-2'>ENTERPRISE</h3>
                            <p className='text-3xl text-black font-bold mb-2'>₹5000 <span className='text-base font-normal'>/ Per Month</span></p>
                            <ul className='space-y-2 text-black text-sm mb-6'>
                                <li>✔ Personalized Diet Plans</li>
                                <li>✔ Regular Progress Check-ins </li>
                                <li>✔ Supplement Guidance (if needed)</li>
                                <li>✔ Basic Query Support (Monday–Friday)</li>
                                <li>✔ Online Workout Coaching</li>
                                <li>✔ Weekly Progress Monitoring & Adjustments</li>
                                <li>✔ 1-on-1 WhatsApp Support (Mon–Sat)</li>
                                <li>✔ Motivation & Accountability Check-ins</li>
                            </ul>
                            <button className='px-5 py-2 border-2 text-black bg-[#e2dddb] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition font-semibold'>
                                Choose Plan
                            </button>
                        </div>


                        {/* <div className='bg-[#2b2b2b] min-h-[500px] rounded-xl p-8 flex flex-col items-center justify-evenly text-white'>
                                <h3 className='text-xl font-semibold mb-2'>PROFESSIONAL</h3>
                                <p className='text-3xl font-bold mb-2'>₹2099 <span className='text-base font-normal'>/ Per Month</span></p>
                                <ul className='space-y-2 text-sm mb-6'>
                                    <li>✔ 7 classes per month</li>
                                    <li>✔ 6 group class monthly</li>
                                    <li>✔ Online class access</li>
                                    <li>✔ E-book fitness guide</li>
                                </ul>
                                <button className='px-5 py-2 border-2 text-white bg-[#2b2b2b] border-[#ff7846] hover:text-black rounded-lg font-semibold hover:bg-[#ff7846] transition font-semibold'>
                                    Choose Plan
                                </button>
                            </div> */}
                    </div>
                </div>
            </section>
        </main>
    )
}
