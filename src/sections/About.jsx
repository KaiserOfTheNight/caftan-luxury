import React from "react";

function About() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative">
          <img
            src="./images/about.png"
            alt="About Caftan"
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          {/* Soft overlay glow */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>

        {/* Content */}
        <div>
          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-4">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Tradition Meets <span className="text-yellow-400">Luxury</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We craft timeless Moroccan caftans inspired by heritage, elegance,
            and modern fashion. Each piece is designed with passion, detail,
            and a touch of luxury to make you feel unique.
          </p>

          <p className="text-gray-400 mb-8">
            From weddings to special events, our caftans are made to highlight
            your beauty and confidence in every moment.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition">
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;