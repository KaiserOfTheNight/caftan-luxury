export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      
      {/* Background Image */}
      <img
        src="./images/hero.png"
        alt="Caftan Spa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        
        <div className="max-w-xl text-white">
          
          {/* Small Tag */}
          <p className="uppercase tracking-[4px] text-sm text-gray-200 mb-4">
            Luxury Moroccan Experience
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Elegance in <span className="text-yellow-400">Every Thread</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 mb-8 text-lg">
            Discover the beauty of traditional caftan and relax in a world of
            luxury, calm, and timeless style.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition">
              Explore Collection
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Book Experience
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}