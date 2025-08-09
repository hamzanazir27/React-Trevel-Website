import { useContext, useEffect } from "react";
import TripContext from "../context/TripContxt";
import { Link } from "react-router-dom";

function HeroSection() {
  const { user, img, imgTray, setImg } = useContext(TripContext);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed z-0 pt-20"
      style={{
        backgroundImage: `url(${imgTray[img]})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center text-white px-6 pt-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            {user.name && (
              <h2 className="text-2xl md:text-4xl font-semibold text-blue-100">
                Welcome, <span className="text-white">{user.name}</span>
              </h2>
            )}
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
                Explore the World
              </span>
              <span className="block text-3xl md:text-5xl font-normal text-blue-200 mt-2">
                with Us
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          <p className="text-xl md:text-3xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your journey begins here, where dreams meet destinations
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              onClick={() => setImg("home")}
              to=""
              className="group relative bg-white/10 text-blue-600 font-semibold px-8 py-4 rounded-full border border-white/30 backdrop-blur-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>

            <Link
              onClick={() => setImg("booking")}
              to="/booking"
              className="group relative bg-blue-500/10 text-white font-semibold px-8 py-4 rounded-full border border-white/30 backdrop-blur-md hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          </div>

          <div className="pt-4">
            <div className="flex justify-center items-center space-x-8 text-2xl text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Trusted by 10k+ travelers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span>Premium destinations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
