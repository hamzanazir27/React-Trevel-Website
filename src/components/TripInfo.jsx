import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TripInfo() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Find trip by ID
  const trip = useSelector((state) =>
    state.recentTrips.trips.find((trip) => trip.id === id)
  );

  // If no trip found
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="text-5xl mb-4">🚫</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Trip Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The trip you're looking for doesn't exist.
          </p>
          <Link
            to="booking"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse All Trips
          </Link>
        </div>
      </div>
    );
  }

  const {
    heading,
    description,
    duration,
    price,
    type,
    date,
    tags,
    mainImage,
    extraImages,
  } = trip.tripsinfo;

  // Combine main image with extra images for carousel
  const allImages = [mainImage, ...(extraImages || [])];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying && allImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, allImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
    setIsAutoPlaying(false);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full  bg-indigo-100 pt-10">
      <div className=" max-w-5xl  ml-auto mr-auto ">
        {/* Hero Section with Carousel */}
        <div className="relative h-100   overflow-hidden">
          <div className="relative w-full h-full">
            {/* Images */}
            <div className="relative w-full h-full">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${heading} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-all"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-all"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Hero Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="max-w-4xl mx-auto">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  {type}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {heading}
                </h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Pakistan</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fas fa-users"></i>
                    <span>{tags.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Trip Details Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-calendar-alt text-blue-600"></i>
                <div>
                  <p className="text-xs text-gray-600">Date</p>
                  <p className="font-semibold text-sm">{date}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-clock text-green-600"></i>
                <div>
                  <p className="text-xs text-gray-600">Duration</p>
                  <p className="font-semibold text-sm">{duration}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-tag text-purple-600"></i>
                <div>
                  <p className="text-xs text-gray-600">Type</p>
                  <p className="font-semibold text-sm">{type}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-lg p-4 shadow-sm text-white">
              <div className="flex items-center gap-2">
                <i className="fas fa-dollar-sign"></i>
                <div>
                  <p className="text-xs text-blue-100">Price</p>
                  <p className="font-bold">Rs. {price}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  About This Trip
                </h2>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What to Expect
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Images Grid */}
              {extraImages && extraImages.length > 0 && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    More Photos
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {extraImages.map((img, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-md"
                        onClick={() => goToImage(index + 1)}
                      >
                        <img
                          src={img}
                          alt={`${heading} - Extra ${index + 1}`}
                          className="w-full h-32 object-cover hover:opacity-80 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-1">
                    Rs. {price}
                  </p>
                  <p className="text-gray-600 text-sm">per person</p>
                </div>

                <Link
                  onClick={() => setImg("contact")}
                  to={`/contacts/${id}`}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Book Now
                  <i className="fas fa-chevron-right text-sm"></i>
                </Link>

                <p className="text-center text-xs text-gray-600 mt-3">
                  Free cancellation up to 24 hours before departure
                </p>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Trip Highlights
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-blue-600 text-xs"></i>
                    Professional guide included
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-blue-600 text-xs"></i>
                    All meals provided
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-blue-600 text-xs"></i>
                    Transportation included
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-blue-600 text-xs"></i>
                    Photography opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripInfo;
