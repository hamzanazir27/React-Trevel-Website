import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
function Navbar() {
  const username = "Hamza";
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center sticky top-2 z-50 border-b rounded-2xl ml-4 mr-4 border-gray-100 ">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md ring-2 ring-blue-100"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
          Ubanto Tours
        </span>
      </div>

      <div className="flex items-center space-x-8">
        <NavLinks />
        <div className="bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-2 rounded-full border border-blue-200">
          <span className="text-gray-700 font-medium">Welcome, </span>
          <span className="text-blue-600 font-semibold capitalize">
            {username}
          </span>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-2 rounded-full border border-blue-200">
          <span className="text-gray-700 font-medium">Logout</span>
        </div>
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <ul className="flex space-x-8">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full "
              : "bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-2 rounded-full border border-blue-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300"
              : "bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-2 rounded-full border border-blue-200"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300"
              : "bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-2 rounded-full border border-blue-200"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300"
              : "bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-2 rounded-full border border-blue-200"
          }
        >
          Booking
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
