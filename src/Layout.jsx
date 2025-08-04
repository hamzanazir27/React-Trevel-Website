import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Outlet /> {/* Child routes will render here */}
      <Footer />
    </>
  );
}

export default Layout;
