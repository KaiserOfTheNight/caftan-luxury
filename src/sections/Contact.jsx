import React from "react";

function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      
      {/* Title */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-[4px] text-gray-400 text-sm">
          Contact Us
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mt-2">
          Book Your <span className="text-yellow-400">Caftan Experience</span>
        </h2>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="./images/contact.jpg"
            alt="Contact Caftan"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
          
          <div className="flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/40 border border-white/10 p-3 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/40 border border-white/10 p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-black/40 border border-white/10 p-3 rounded-lg outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-black/40 border border-white/10 p-3 rounded-lg outline-none"
            ></textarea>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-full font-semibold transition">
              Send Message
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;