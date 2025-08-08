import profile from "../assets/Papolar-destinations/malam-jaba-2.jpg";
import r1 from "../assets/reviews/r-1.jpg";
import r2 from "../assets/reviews/r-2.jpg";
import r3 from "../assets/reviews/r-3.jpg";
import r4 from "../assets/reviews/r-4.jpg";
import r5 from "../assets/reviews/r-5.jpg";
import r6 from "../assets/reviews/r-6.jpg";
import r7 from "../assets/reviews/r-7.jpg";
import r8 from "../assets/reviews/r-8.jpg";
import r9 from "../assets/reviews/r-9.jpg";
import r10 from "../assets/reviews/r-10.jpg";
import r11 from "../assets/reviews/r-11.jpg";
import r12 from "../assets/reviews/r-12.jpg";
import r13 from "../assets/reviews/r-13.jpg";
import r14 from "../assets/reviews/r-14.jpg";
import r15 from "../assets/reviews/r-15.jpg";

import p1 from "../assets/reviews/profile/p1.jfif";
import p2 from "../assets/reviews/profile/p2.jfif";
import p3 from "../assets/reviews/profile/p3.jfif";
import p4 from "../assets/reviews/profile/p4.jfif";
function Reviews() {
  const galleryImages = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
  ];

  const profile = [p1, p2, p3, p4];
  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto  ">
      <div className="grid lg:grid-cols-2 gap-8    items-center ">
        {/* Left Side - Reviews (50%) */}
        <div className="justify-center ">
          <h1 className="text-3xl font-bold text-center mb-12">
            Once You Go With Us, You'll Never Forget It
          </h1>
          <div className="grid grid-cols-2 gap-3">
            {["Zohya", "Khalid", "Mudaser", "Ahmad"].map((name, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                <img
                  src={profile[index]}
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
          <div className="grid grid-cols-3 gap-1 overflow-hidden">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="object-cover w-full h-32 transition-transform duration-300 hover:scale-150 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
