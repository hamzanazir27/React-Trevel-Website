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
                  +92 300 1234567
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
                <span className="text-xl">📘</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
                <span className="text-xl">📸</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 cursor-pointer">
                <span className="text-xl">🐦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt={logo}
              className="h-16 w-16 rounded-full shadow-lg "
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
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                <span>About</span>
              </a>
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

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="text-center text-gray-400 relative z-10">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved by
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent ml-1">
              Hamza Nazir
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// ---------------------------------------------------------------------
