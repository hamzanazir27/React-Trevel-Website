import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./index.css";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Admin from "./Pages/Admin";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import TripInfo from "./components/TripInfo";
import TripContextProvider from "./context/tripContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="booking" element={<Booking />} />
      <Route path="/booking/:id" element={<TripInfo />} />
      <Route path="/contacts/:id" element={<Contact />} />
      <Route path="admin" element={<Admin />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TripContextProvider>
        <RouterProvider router={router} />
      </TripContextProvider>
    </Provider>
  </React.StrictMode>
);
