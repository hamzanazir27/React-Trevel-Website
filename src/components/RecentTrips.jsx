import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TripContext from "../context/TripContxt";

function RecentTrips() {
  const trips = useSelector((state) => state.recentTrips.trips);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          OUR RECENT TRIPS
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <RecentTripsCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentTripsCard({ trip }) {
  const { setImg } = useContext(TripContext);
  const {
    id,
    tripsinfo: {
      heading,
      price,
      type,
      duration,
      date,
      mainImage: imgSrc,
      tags,
    },
  } = trip;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={imgSrc}
          alt={heading}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
            Rs {price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{heading}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <i className="fas fa-clock"></i>
            <span>{duration}</span>
            <span className="text-gray-400">•</span>
            <i className="fas fa-calendar-alt"></i>
            <span>{date}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={`${id}-tag-${i}`}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border"
            >
              ✓ {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            to={`/booking/${id}`}
            className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
          >
            View Details
          </Link>
          <Link
            to={`/contacts/${id}`}
            onClick={() => setImg && setImg("contact")}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecentTrips;
