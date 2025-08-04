import profile from "../assets/Papolar-destinations/malam-jaba-2.jpg";
import gallary1 from "../assets/Papolar-destinations/malam-jaba-2.jpg";

function Reviews() {
  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto  bg-indigo-100">
      <div className="grid lg:grid-cols-2 gap-8    items-center ">
        {/* Left Side - Reviews (50%) */}
        <div className="justify-center ">
          <h1 className="text-3xl font-bold text-center mb-12">
            Once You Go With Us, You'll Never Forget It
          </h1>
          <div className="grid grid-cols-2 gap-3">
            {["Billal", "Khalid", "Mudaser", "Ahmad"].map((name, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                <img
                  src={profile}
                  alt="profile"
                  className="w-10 h-10 rounded-full mx-auto mb-3"
                />
                <p className="text-xs text-gray-600 mb-2 text-center">
                  "Amazing experience! Highly recommend."
                </p>
                <span className="block text-center text-sm font-semibold text-gray-700">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Gallery (50%) */}
        <div>
          <div className="grid grid-cols-3 gap-1">
            {Array(15)
              .fill(gallary1)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="object-cover w-full h-32 hover:opacity-90 transition-opacity"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
