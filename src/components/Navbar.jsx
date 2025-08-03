import { NavLink } from "react-router-dom";

function Navbar() {
  const username = "hamza";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-blue-600">Hamza Tours</span>
      </div>

      {/* Links and Welcome */}
      <div className="flex items-center space-x-8">
        <NavLinks />
        <div className="text-gray-600 font-medium">Welcome, {username}</div>
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <ul className="flex space-x-6">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Booking
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700"
          }
        >
          Services
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
