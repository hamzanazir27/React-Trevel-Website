import Featuresin from "../components/FeaturesIn";
import Navbar from "../components/Navbar";
import PopularDestinations from "../components/PapolarDestinations";
import RecentTrips from "../components/RecentTrips";
import Reviews from "../components/Reviews";
import TopDestinations from "../components/TopDestinations";

function Home() {
  return (
    <>
      <Featuresin />
      <PopularDestinations />
      <TopDestinations />
      <RecentTrips />
      <Reviews />
    </>
  );
}

export default Home;
