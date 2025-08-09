import { Link } from "react-router-dom";
import { useContext } from "react";
import TripContext from "../context/TripContxt";

function About() {
  const { setImg } = useContext(TripContext);

  return (
    <section className="bg-indigo-100">
      <div className="px-6 py-16 max-w-screen-xl mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            At <strong className="text-blue-600">Hamza Travels</strong>, we
            believe travel is more than just a destination — it's about
            unforgettable experiences. With over{" "}
            <strong className="text-blue-600">5+ years of experience</strong>,
            we've helped thousands of adventurers explore the beauty of Pakistan
            and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🗺️ Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To make travel easy, affordable, and magical — for every kind of
              traveler. Whether you're a solo explorer, a couple on honeymoon,
              or a family group, we've got you covered.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🤝 Why Choose Us?
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                24/7 Customer Support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                Customized Travel Plans
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                Trusted by 10,000+ travelers
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                Certified Local Guides
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                Budget to Luxury Packages
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🌍 Our Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our passionate team of travel experts, tour planners, and local
              guides are committed to making your journey smooth and
              unforgettable.
            </p>
          </div>
        </div>

        <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">Ready to explore your next adventure?</p>
          <Link
            onClick={() => setImg && setImg("booking")}
            to="/booking"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
