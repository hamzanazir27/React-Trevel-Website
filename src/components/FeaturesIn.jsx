import React from "react";
import binsider from "../assets/logos/business-insider.png";
import forbes from "../assets/logos/forbes.png";
import techcrunch from "../assets/logos/techcrunch.png";
import nytimes from "../assets/logos/the-new-york-times.png";

function FeaturesIn() {
  return (
    <div className=" bg-indigo-100 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          As Featured In
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img
            src={binsider}
            alt="Business Insider"
            className="h-8 filter grayscale"
          />
          <img src={forbes} alt="Forbes" className="h-8 filter grayscale" />
          <img
            src={techcrunch}
            alt="TechCrunch"
            className="h-8 filter grayscale"
          />
          <img
            src={nytimes}
            alt="New York Times"
            className="h-8 filter grayscale"
          />
          <img
            src={binsider}
            alt="Business Insider"
            className="h-8 filter grayscale"
          />
          <img src={forbes} alt="Forbes" className="h-8 filter grayscale" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesIn;
