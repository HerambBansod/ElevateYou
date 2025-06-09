"use client";
import React from 'react'

export default function AboutUs() {
    return (
        <main>
            <section className='w-full w-[1440px] flex flex-col'>
                <div className="w-full min-h-full bg-[#e2dddb] flex flex-col justify-start items-center px-6 py-14 gap-10">

                    <div className='w-full max-w-4xl text-center space-y-4'>
                        <h1 className='text-5xl md:text-5xl text-black font-semibold'>About</h1>
                        <p className='text-xl md:text-xl text-black'>
                            ElevateYou by Siddhi Barge is a fitness brand dedicated to empowering you through personalized training and holistic well-being. Founded by certified trainer Siddhi Barge, we provide expert guidance, tailored workout plans, and modern equipment to help you unlock your full potential. Whether you're a beginner or striving for new goals, ElevateYou supports your journey to strength, confidence, and greatness—one rep at a time.
                        </p>
                    </div>


                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5">

                        <div className="bg-[#1a1a1a] min-h-[280px] h-auto p-6 rounded-t-lg flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold mb-2 text-white text-center">Our Mission</h2>
                            <p className="text-lg text-white text-center">
                                To empower individuals to achieve their fitness goals through personalized training, expert guidance, and a supportive community.
                            </p>
                        </div>


                        <div className="bg-[#1a1a1a] min-h-[280px] h-auto p-6 flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold mb-2 text-white text-center">Our Vision</h2>
                            <p className="text-lg text-white text-center">
                                To be a leading fitness brand that inspires and transforms lives through innovative training methods and holistic wellness.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] min-h-[280px] h-auto p-6 rounded-t-lg flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold mb-2 text-white text-center">Our Values</h2>
                            <p className="text-lg text-white text-center">
                                Dedication, integrity, community, and a commitment to continuous growth in every individual we coach.
                            </p>
                        </div>


                        <div
                            className="col-span-1 md:col-span-3 bg-[#1a1a1a] min-h-[300px] h-auto p-6 rounded-b-lg border-2 border-blue-500 flex flex-col justify-center items-start gap-4 text-white"
                            style={{
                                backgroundImage: "url('/BG_Img.webp')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundAttachment: 'fixed',
                            }}
                        >
                            <h1 className="text-3xl md:text-4xl font-bold text-white">ElevateYou</h1>
                            <p className="text-lg md:text-xl max-w-3xl text-white">
                                ElevateYou by Siddhi Barge is a fitness brand dedicated to empowering you through personalized training and holistic well-being. Founded by certified trainer Siddhi Barge, we provide expert guidance, tailored workout plans, and modern equipment to help you unlock your full potential. Whether you're a beginner or striving for new goals, ElevateYou supports your journey to strength, confidence, and greatness one rep at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
