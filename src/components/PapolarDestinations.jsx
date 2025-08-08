import mala1 from "../assets/Papolar-destinations/malam-jaba-1.webp";
import mala2 from "../assets/Papolar-destinations/malam-jaba-2.webp";
import naran1 from "../assets/Papolar-destinations/naran-1.webp";
import naran2 from "../assets/Papolar-destinations/naran-2.webp";
import sawat1 from "../assets/Papolar-destinations/sawat-1.webp";
import sawat2 from "../assets/Papolar-destinations/sawat-2.webp";

const destinations = [
  {
    heading: "Malam Jabba",
    paragraph:
      "Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.",
    img1: mala1,
    img2: mala2,
  },
  {
    heading: "Naran Kaghan",
    paragraph:
      "Witness the breathtaking lakes and lush green valleys. A paradise for nature and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure lovers.",
    img1: naran1,
    img2: naran2,
  },
  {
    heading: "Swat Valley",
    paragraph:
      "Famous for its beautiful river, hospitality, and scenic mountain viewsand adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.Explore the snowy slopes and pine-covered valleys of Malam Jabba, perfect for skiing and adventure.",
    img1: sawat1,
    img2: sawat2,
  },
];

function PopularDestinations() {
  return (
    <section className="py-20 px-6   relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Popular Destinations
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover breathtaking locations that will create memories to last a
            lifetime
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="space-y-16">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ heading, paragraph, img1, img2, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl p-8 md:p-12 transition-transform duration-500 hover:scale-[1.02] border border-white/20 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex flex-col md:flex gap-8 md:gap-12 items-center overflow-hidden`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content Section */}
      <div className="flex-1 space-y-6 relative z-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {heading}
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed font-light">
            {paragraph}
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex-1 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Image (shifted up) */}
          <div className="relative group/img overflow-hidden rounded-2xl shadow-xl transform -translate-y-3">
            <img
              src={img1}
              alt={heading}
              className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover/img:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
          </div>

          {/* Second Image (shifted down) */}
          <div className="relative group/img overflow-hidden rounded-2xl shadow-xl transform translate-y-3">
            <img
              src={img2}
              alt={heading}
              className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover/img:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      {/* Card Number */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {index + 1}
      </div>
    </div>
  );
}

export default PopularDestinations;
