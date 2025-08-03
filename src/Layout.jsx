import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <HeroSection />
      <Outlet /> {/* Child routes will render here */}
      <Footer />
    </>
  );
}

export default Layout;
