"use client";
import React from 'react'
import Image from 'next/image';

export default function Service() {
    return (
        <main>
            <section className='w-full w-[1440px] flex flex-col'>

                <div className='w-full w-[1440px] min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center gap-10 py-16 px-6'>
                    <div className="w-full bg-[#1a1a1a] py-20 px-6 text-white">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    The Best Programs We <br /> <span className="text-white">Offers For You</span>
                                </h2>
                            </div>
                            <p className="text-gray-300 max-w-md text-lg md:text-xl mb-8">
                                We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels. Our aim is to help you achieve specific goals & maximize results.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="bg-[#2a2a2a] rounded-xl p-6 text-center hover:shadow-lg transition">
                                <Image src="/Strength.svg" alt="Strength Training" width={60} height={60} className="mx-auto mb-4" />
                                <h3 className="text-3xl font-semibold mb-2">Strength Training</h3>
                                <p className="text-gray-400 text-lg md:text-xl mb-4">
                                    Our trainers will design progressive workout plans that ensure proper strength gains.
                                </p>
                                {/* <a href="Contact" className="text-sm text-[#ff7846] font-medium inline-flex items-center hover:underline">
                                    Learn More →
                                </a> */}
                            </div>

                            <div className="bg-[#2a2a2a] rounded-xl p-6 text-center hover:shadow-lg transition">
                                <Image src="/Yoga.svg" alt="Strength Training" width={60} height={60} className="mx-auto mb-4" />
                                <h3 className="text-3xl font-semibold mb-2">Basic Yoga</h3>
                                <p className="text-gray-400 text-lg md:text-xl mb-4">
                                    Combines yoga with cardio & strength training to help lose weight & improve fitness.
                                </p>
                                {/* <a href="Contact" className="text-sm text-[#ff7846] font-medium inline-flex items-center hover:underline">
                                    Learn More →
                                </a> */}
                            </div>


                            <div className="bg-[#ff7846] text-black rounded-xl p-6 text-center shadow-md ">
                                <Image src="/Building.svg" alt="Strength Training" width={60} height={60} className="mx-auto mb-4" />
                                <h3 className="text-3xl font-semibold mb-2">Body Building</h3>
                                <p className="text-black text-lg md:text-xl mb-4">
                                    For those looking to increase strength, build lean muscle, or enhance physique.
                                </p>
                                {/* <a href="Contact" className="text-sm text-black font-medium inline-flex items-center hover:underline">
                                    Learn More →
                                </a> */}
                            </div>


                            <div className="bg-[#2a2a2a] rounded-xl p-6 text-center hover:shadow-lg transition">
                                <Image src="/WeightLoss.svg" alt="Strength Training" width={60} height={60} className="mx-auto mb-4" />
                                <h3 className="text-3xl font-semibold mb-2">Weight Loss</h3>
                                <p className="text-gray-400 text-lg md:text-xl mb-4">
                                    Our weight loss programs are designed to help you make lasting lifestyle changes.
                                </p>
                                {/* <a href="Contact" className="text-sm text-[#ff7846] font-medium inline-flex items-center hover:underline">
                                    Learn More →
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
