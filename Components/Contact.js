"use client";
import React, { useState } from 'react'
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import toast from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        interests: [],
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const toggleInterest = (interest) => {
        const currentInterests = [...formData.interests];
        if (currentInterests.includes(interest)) {
            setFormData({
                ...formData,
                interests: currentInterests.filter(item => item !== interest)
            });
        } else {
            setFormData({
                ...formData,
                interests: [...currentInterests, interest]
            });
        }
        
        // Clear interest error if any interest is selected
        if (errors.interests) {
            setErrors({
                ...errors,
                interests: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        
        if (formData.interests.length === 0) {
            newErrors.interests = "Please select at least one interest";
        }
        
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);
        
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                toast.success('Message sent successfully');
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    interests: [],
                    message: ""
                });
            } else {
                toast.error("Failed to send message");
            }
        } catch (error) {
            toast.error("Couldn't send message");
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <section id='Contact' className='w-full h-full w-[1440px] flex flex-col bg-[#1a1a1a] py-16 px-6'>
                <div className='w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center gap-10 '>

                    <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-6 py-16 text-white">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 text-center">Contact Us</h2>

                        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

                            <div className="flex flex-col gap-6">
                                <h1 className='text-3xl font-semibold text-[#ff7846] mb-1'>Social Media</h1>
                                <div className="flex gap-10 ">
                                    <a href="https://www.instagram.com/sidd_liftzz?igsh=N3dwb3ExaTdwbWhn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-3xl">
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://wa.me/9172760151716"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-500 transition text-3xl"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                    <a href="tel:+9172760151716" className="hover:text-yellow-400 transition text-3xl">
                                        <FaPhoneAlt />
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-semibold text-[#ff7846] mb-1">Email</h3>
                                    <p className='text-xl'><a href="mailto:siddhibarge383@gmail.com" className="hover:underline">siddhibarge383@gmail.com</a></p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-semibold text-[#ff7846] mb-1">Phone</h3>
                                    <p className='text-xl'>+91-72760151716</p>
                                </div>
                            </div>

                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-xl font-medium mb-1">First Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white focus:outline-none px-2 py-2" 
                                        />
                                        {errors.firstName && <span className="text-xl text-red-500 mt-1">{errors.firstName}</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-xl font-medium mb-1">Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white focus:outline-none px-2 py-2" 
                                        />
                                        {errors.lastName && <span className="text-xl text-red-500 mt-1">{errors.lastName}</span>}
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-xl font-medium mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-white focus:outline-none px-2 py-2" 
                                    />
                                    {errors.email && <span className="text-xl text-red-500 mt-1">{errors.email}</span>}
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-xl font-medium mb-2">What are you interested in?</label>
                                    <div className="flex flex-wrap gap-2">
                                        {["₹3000 Plan", "₹5000 Plan", "Other"].map((item) => (
                                            <button
                                                type="button"
                                                key={item}
                                                onClick={() => toggleInterest(item)}
                                                className={`px-3 py-1 border border-white rounded-full hover:bg-[#ff7846] hover:text-black text-xl transition ${
                                                    formData.interests.includes(item) ? "bg-[#ff7846] text-black" : ""
                                                }`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.interests && <span className="text-xltext-red-500 mt-1">{errors.interests}</span>}
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-xl font-medium mb-1">Message / Questions</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-white focus:outline-none px-2 py-2"
                                    />
                                    {errors.message && <span className="text-xl text-red-500 mt-1">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-4 px-6 py-3 bg-[#ff7846] text-black text-xl font-semibold rounded-lg hover:bg-white hover:text-black transition disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}