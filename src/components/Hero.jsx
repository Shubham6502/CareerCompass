import React from 'react'
import heroImg from "../assets/Heroimg.svg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-16 py-30 bg-gray-50">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight leading-8">
          Empower Your <span className="text-blue-600">Career Journey</span> with AI Guidance
        </h1>
        <p className="text-gray-600 text-base mt-20  md:text-lg">
          CareerCompass helps you choose the right learning path, track your progress,
          and prepare for your dream job — all powered by AI.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img src={heroImg} alt="Career Growth" className="w-64 md:w-96" />
      </div>
      </section>
  )
}

export default Hero