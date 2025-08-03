import Navbar from "./Navbar";

// imp;

function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/home-herosection-background.jpg')" }}
    >
      {/* NavBar */}
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore the World with Us
        </h1>
        <p className="text-lg md:text-2xl mb-6">Your journey begins here</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
