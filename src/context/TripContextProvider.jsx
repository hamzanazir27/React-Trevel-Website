import TripContext from "./TripContxt";
import { useState } from "react";
//  D:\Desktop\devweekends-fellowship\react\MegaProjectTravel\src\assets\HeroSection\hero-img-0.jpg
import img0 from "../assets/HeroSection/hero-img-0.jpg";
import img1 from "../assets/HeroSection/hero-img-1.jpg";
import img2 from "../assets/HeroSection/hero-img-2.jpg";
import img3 from "../assets/HeroSection/hero-img-3.jpg";
import img4 from "../assets/HeroSection/hero-img-4.jpg";

function TripContextProvider({ children }) {
  const [loginForm, setLoginFrom] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [loginLogout, setLoginLogout] = useState("login");
  const [img, setImg] = useState("home");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const imgTray = {
    home: img3,
    about: img1,
    contact: img2,
    booking: img0,
    admin: img4,
  };

  const handleAdminLogin = (adminUsername, adminPassword) => {
    if (adminUsername === "hamza" && adminPassword == "hamza") {
      setAdmin(true);

      return true;
    }
    return false;
  };

  return (
    <TripContext.Provider
      value={{
        isConfirmOpen,
        setIsConfirmOpen,
        imgTray,
        img,
        setImg,
        setLoginLogout,
        loginLogout,
        setAdmin,
        admin,
        user,
        setUser,
        handleAdminLogin,
        setLoginFrom,
        loginForm,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export default TripContextProvider;
