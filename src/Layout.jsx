import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginOverlay from "./components/LoginOverlay";
import ConfirmationDialog from "./components/ConfirmationDialog";

function Layout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LoginOverlay />
      <ConfirmationDialog />
      <Outlet /> {/* Child routes will render here */}
      <Footer />
    </>
  );
}

export default Layout;
