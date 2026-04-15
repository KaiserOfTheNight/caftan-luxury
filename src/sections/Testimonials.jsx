import React from "react";

function Testimonials() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      
      {/* Title */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-[4px] text-gray-400 text-sm">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mt-2">
          What Our <span className="text-yellow-400">Clients Say</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Testimonial 1 */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <p className="text-gray-300 mb-6">
            “The caftan was absolutely stunning. The quality and detail made me
            feel like royalty at my wedding.”
          </p>

          <div className="flex items-center gap-4">
            <img
              src="./images/client1.jpg"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Sara El Amrani</h4>
              <span className="text-gray-400 text-sm">Wedding Client</span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <p className="text-gray-300 mb-6">
            “Elegant, comfortable, and truly luxurious. I received so many
            compliments during my event.”
          </p>

          <div className="flex items-center gap-4">
            <img
              src="./images/client2.jpg"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Yasmine B.</h4>
              <span className="text-gray-400 text-sm">Event Client</span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <p className="text-gray-300 mb-6">
            “A perfect blend of tradition and modern design. I absolutely loved
            the experience.”
          </p>

          <div className="flex items-center gap-4">
            <img
              src="./images/client3.jpg"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Nadia K.</h4>
              <span className="text-gray-400 text-sm">Regular Client</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;