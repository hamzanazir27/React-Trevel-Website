import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TripContext from "../context/TripContxt";

const Contact = () => {
  const { user } = useContext(TripContext);
  const { id } = useParams();
  const trip = useSelector((state) =>
    state.recentTrips.trips.find((trip) => trip.id === id)
  );

  let messageFromId = "";

  if (id === "hunza" || id === "skardu") {
    messageFromId = `Hello, I am interested in your top destination ${id}. Please share detailed information about trip schedules, prices, and what is included in these packages. Looking forward to your response. Thank you`;
  } else if (trip && trip.tripsinfo) {
    const { heading, duration, price, type, date, tags } = trip.tripsinfo;

    messageFromId = `Hello, I am interested in the trip titled "${heading}". It is a ${type} trip scheduled for ${date}, lasting ${duration}, priced at ${price}. The trip includes: ${tags}. Please provide more information. Thank you!`;
  }

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    message: messageFromId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // clear form
  };

  return (
    <section className="bg-indigo-100">
      <div className="px-6 py-16 max-w-screen-xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have questions or want to plan your next trip? Send us a message!
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-indigo-100 p-8 rounded-lg shadow-lg border"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
