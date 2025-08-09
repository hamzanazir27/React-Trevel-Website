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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-2 left-2 right-2 md:left-4 md:right-4 lg:left-15 lg:right-15 z-50 bg-white/30 backdrop-blur-md shadow-lg px-4 md:px-6 py-3 md:py-4 flex justify-between items-center border-b border-gray-100/50 rounded-2xl">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 md:w-12 md:h-12 rounded-full shadow-md ring-2 ring-blue-100"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
          </div>
          <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
            Ubanto Tours
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <NavLinks onLinkClick={closeMobileMenu} />
          {loginLogout === "login" ? (
            <button
              onClick={() => setLoginFrom(true)}
              className="bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm hover:bg-blue-50/90 transition-all duration-300"
            >
              <span className="text-gray-700 font-medium">Login</span>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm hover:bg-blue-50/90 transition-all duration-300"
            >
              <span className="text-red-500 font-medium">Logout</span>
            </button>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      <div
        className={`lg:hidden fixed top-20 left-2 right-2 md:left-4 md:right-4 z-50 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-4 max-h-0"
        }`}
      >
        <div className="p-4 space-y-4">
          <NavLinks onLinkClick={closeMobileMenu} isMobile={true} />

          {/* Mobile Login/Logout Button */}
          <div className="pt-4 border-t border-gray-200/50">
            {loginLogout === "login" ? (
              <button
                onClick={() => {
                  setLoginFrom(true);
                  closeMobileMenu();
                }}
                className="w-full bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-3 rounded-full border border-blue-200/50 backdrop-blur-sm hover:bg-blue-50/90 transition-all duration-300"
              >
                <span className="text-gray-700 font-medium">Login</span>
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleLogout(e);
                  closeMobileMenu();
                }}
                className="w-full bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-3 rounded-full border border-blue-200/50 backdrop-blur-sm hover:bg-blue-50/90 transition-all duration-300"
              >
                <span className="text-red-500 font-medium">Logout</span>
              </button>
            )}
          </div>
        </div>
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
    </>
  );
}

function NavLinks({ onLinkClick, isMobile = false }) {
  const { admin, setImg } = useContext(TripContext);

  const baseClass = isMobile
    ? "block w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-blue-50/50 border border-blue-200/30 hover:bg-blue-50/80 transition-all duration-300"
    : "bg-gradient-to-r from-blue-50/80 to-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm transition-all duration-300 hover:bg-blue-50/90 hover:scale-105";

  const activeClass = isMobile
    ? "block w-full text-left px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold"
    : "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-600 after:rounded-full transition-all duration-300";

  const adminActiveClass = isMobile
    ? "block w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold"
    : "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-red-600 after:rounded-full transition-all duration-300";

  const containerClass = isMobile ? "space-y-2" : "flex space-x-8";

  return (
    <ul className={containerClass}>
      <li>
        <NavLink
          onClick={() => {
            setImg("home");
            onLinkClick();
          }}
          to="/"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            setImg("about");
            onLinkClick();
          }}
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            setImg("contact");
            onLinkClick();
          }}
          to="/contact"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            setImg("booking");
            onLinkClick();
          }}
          to="/booking"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Booking
        </NavLink>
      </li>
      {admin && (
        <li>
          <NavLink
            onClick={() => {
              setImg("admin");
              onLinkClick();
            }}
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? adminActiveClass
                : `${baseClass} ${!isMobile ? "hover:text-red-500" : ""}`
            }
          >
            <span className={isMobile ? "text-current" : "text-red-500"}>
              Admin
            </span>
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navbar;
