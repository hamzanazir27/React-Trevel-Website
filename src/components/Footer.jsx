import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Contact Us + Social */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                <p className="text-gray-300 hover:text-white transition-colors">
                  contact@xyz.com
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                <p className="text-gray-300 hover:text-white transition-colors">
                  +92 300 00000000
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {/* Instagram */}
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </div>

              {/* Facebook */}
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </div>

              {/* Twitter/X */}
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Ubanto Tours Logo"
              className="h-16 w-16 rounded-full shadow-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Ubanto Tours
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Discover new destinations and create unforgettable memories with us.
            Your adventure awaits!
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-200">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                <span>About</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
                <span>Press</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-200">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                <span>Help Center</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                <span>Terms & Privacy</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="text-center text-gray-400 relative z-10">
          <p className="text-lg sm:text-sm md:text-l lg:text-xl">
            © {new Date().getFullYear()} All rights reserved by
            <a
              href="https://www.linkedin.com/in/hamzanazir1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent ml-1 hover:from-blue-300 hover:to-purple-400 hover:scale-105 transition-all duration-300 hover:underline"
            >
              Hamza Nazir
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
