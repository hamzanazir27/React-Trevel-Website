import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RecentTrips() {
  const trips = useSelector((state) => state.recentTrips.trips);

  return (
    <section className="py-12 px-4  ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 ">
          OUR RECENT TRIPS
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <RecentTripsCard key={index} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentTripsCard({ trip }) {
  // Fix: Correct destructuring based on your object structure
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
    <div className="bg-white rounded-lg shadow-md   hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      <img
        src={imgSrc}
        alt={heading}
        className="w-full h-48 object-cover rounded-t-lg hover:scale-3d"
      />

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
          <span className="text-lg font-bold text-blue-600">Rs {price}</span>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {type}
          </span>
          <span>{duration}</span>
          <span className="bg-gray-100 text-amber-900 text-xs px-2 py-1 rounded mr-4">
            Date : {date}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          onClick={() => setImg("booking")}
          to={`/booking/${id}`} // Changed from id to tripid
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors pl-10 pr-10"
        >
          View Details
        </Link>

        {/* <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
          View Details
        </button> */}
      </div>
    </div>
  );
}

export default RecentTrips;
