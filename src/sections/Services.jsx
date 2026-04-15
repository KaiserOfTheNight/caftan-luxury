import React from "react";

function Services() {
  return (
    <section className="py-20 bg-black text-white px-6 md:px-16">
      
      {/* Title */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-[4px] text-gray-400 text-sm">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mt-2">
          Caftan <span className="text-yellow-400">Elegance</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="./images/service1.jpg"
            alt="Custom Caftan"
            className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-0 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Custom Caftan Design
            </h3>
            <p className="text-gray-300 text-sm">
              Tailored caftans designed with Moroccan tradition and modern luxury.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="./images/service2.jpg"
            alt="Rental Caftan"
            className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-0 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Luxury Caftan Rental
            </h3>
            <p className="text-gray-300 text-sm">
              Wear premium caftans for weddings, events, and special occasions.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="./images/service3.jpg"
            alt="Styling Service"
            className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-0 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Personal Styling
            </h3>
            <p className="text-gray-300 text-sm">
              Get expert styling advice to match your perfect traditional look.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;