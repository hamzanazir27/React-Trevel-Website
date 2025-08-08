import { Link } from "react-router-dom";
import img1 from "../assets/reviews/r-9.webp";
import img2 from "../assets/reviews/r-11.webp";
import { useContext } from "react";
import TripContext from "../context/TripContxt";

const destinations = [
  {
    imgSrc: img1,
    heading: "Hunza Valley",
    type: "Nature",
    days: "5 Days",
    review: "⭐️ 4.9 (827)",
    tags: ["Family", "Views", "Local Food"],
  },
  {
    imgSrc: img2,
    heading: "Skardu",
    type: "Adventure",
    days: "7 Days",
    review: "⭐️ 4.8 (652)",
    tags: ["Mountains", "Trekking", "Glaciers"],
  },
];

function TopDestinations() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          OUR TOP DESTINATIONS
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: Cards */}
          <div className="grid gap-8 sm:grid-cols-2 flex-1">
            {destinations.map((dest, index) => (
              <TopDestinationCard key={index} {...dest} />
            ))}
          </div>

          {/* Right Side: Vertical Info */}
          <div className="flex-1 lg:max-w-xs">
            <TopDestinationInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

function TopDestinationCard({ imgSrc, heading, type, days, review, tags }) {
  const { setImg } = useContext(TripContext);

  const id = heading.split(" ")[0].toLowerCase();
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img src={imgSrc} alt={heading} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {days}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
          <p className="text-lg text-yellow-500 font-medium">{review}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium border border-blue-200"
            >
              ✓ {tag}
            </span>
          ))}
        </div>
        <Link
          onClick={() => setImg("contact")}
          to={`/contacts/${id}`}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 mt-8 pl-30 pr-30"
        >
          {" "}
          Book Now
        </Link>

        {/* <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300">
          Book Now
        </button> */}
      </div>
    </div>
  );
}

function TopDestinationInfo() {
  const filters = [
    "Family",
    "Couples",
    "Adventure",
    "Budget",
    "Luxury",
    "Solo",
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
      <div className="space-y-3">
        {filters.map((f, i) => (
          <div key={i} className="flex items-center space-x-3 p-3 rounded-xl ">
            <div> ✔</div>
            <span className="text-gray-800 font-medium text-lg">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDestinations;
