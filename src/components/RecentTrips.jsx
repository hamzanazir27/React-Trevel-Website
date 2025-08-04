import img1 from "../assets/Papolar-destinations/malam-jaba-2.jpg";

const destinations = [
  {
    imgSrc: img1,
    heading: "Hunza Valley",
    type: "Nature",
    days: "5 Days",
    tags: ["Family", "Views", "Local Food"],
    price: 6000,
  },
  {
    imgSrc: img1,
    heading: "Hunza Valley",
    type: "Nature",
    days: "5 Days",
    tags: ["Family", "Views", "Local Food"],
    price: 6000,
  },
  {
    imgSrc: img1,
    heading: "Hunza Valley",
    type: "Nature",
    days: "5 Days",
    tags: ["Family", "Views", "Local Food"],
    price: 6000,
  },
  {
    imgSrc: img1,
    heading: "Hunza Valley",
    type: "Nature",
    days: "5 Days",
    tags: ["Family", "Views", "Local Food"],
    price: 6000,
  },
  {
    imgSrc: img1,
    heading: "Hunza Valley",
    type: "Nature",
    days: "5 Days",
    tags: ["Family", "Views", "Local Food"],
    price: 6000,
  },

  {
    imgSrc: img1,
    heading: "Skardu",
    type: "Adventure",
    days: "7 Days",
    tags: ["Mountains", "Trekking", "Glaciers"],
    price: 5000,
  },
];

function RecentTrips() {
  return (
    <section className="py-12 px-4  bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          OUR RECENT TRIPS
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <RecentTripsCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentTripsCard({ imgSrc, heading, type, days, tags, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imgSrc}
        alt={heading}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
          <span className="text-lg font-bold text-blue-600">
            Rs {price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {type}
          </span>
          <span>{days}</span>
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

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default RecentTrips;
