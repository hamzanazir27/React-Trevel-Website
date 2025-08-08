import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { useContext, useState } from "react";
import TripContext from "../context/TripContxt";
import ConfirmationDialog from "./ConfirmationDialog";

function Navbar() {
  const {
    loginLogout,
    setLoginFrom,
    setLoginLogout,
    setAdmin,
    setUser,
    setIsConfirmOpen,
    isConfirmOpen,
  } = useContext(TripContext);

  const handleConfirmLogout = () => {
    setLoginLogout("login");
    setAdmin(false);
    setUser({ name: "", email: "" });
    setIsConfirmOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsConfirmOpen(true);
  };

  return (
    <nav className="fixed top-2 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center border-b border-gray-100/50 mr-15 ml-15 rounded-2xl">
      <div className="flex items-center space-x-3 ">
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
        {loginLogout === "login" ? (
          <button
            onClick={() => setLoginFrom(true)}
            className="bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm"
          >
            <span className="text-gray-700 font-medium">Login</span>
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm"
          >
            <span className="text-red-500 font-medium">Logout</span>
          </button>
        )}
      </div>
      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onConfirm={handleConfirmLogout}
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        cancelText="Cancel"
        type="danger"
      />
    </nav>
  );
}

function NavLinks() {
  const { admin, setImg } = useContext(TripContext);

  const baseClass =
    "bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm transition-all duration-300 hover:bg-blue-50/90 hover:scale-105";

  return (
    <ul className="flex space-x-8">
      <li>
        <NavLink
          onClick={() => setImg("home")}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full"
              : baseClass
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setImg("about")}
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300"
              : baseClass
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setImg("contact")}
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300"
              : baseClass
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setImg("booking")}
          to="/booking"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300"
              : baseClass
          }
        >
          Booking
        </NavLink>
      </li>
      {admin && (
        <li>
          <NavLink
            onClick={() => setImg("admin")}
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-red-600 after:rounded-full transition-all duration-300"
                : `${baseClass} hover:text-red-500`
            }
          >
            <span className="text-red-500">Admin</span>
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navbar;
