import { useContext, useEffect } from "react";
import RecentTripsForm from "../components/RecentTripsForm";
import RecentTripsShow from "../components/RecentTripsShow";
import TripContext from "../context/TripContxt";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const { admin } = useContext(TripContext);

  // useEffect(() => {
  //   if (!admin) {
  //     navigate("/");
  //   }
  // }, [admin, navigate]);

  return (
    <>
      {" "}
      <RecentTripsForm />
      <RecentTripsShow />
    </>
  );
}

export default Admin;
