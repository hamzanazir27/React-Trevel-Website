import Featuresin from "../components/FeaturesIn";
import PopularDestinations from "../components/PapolarDestinations";
import RecentTrips from "../components/RecentTrips";
import Reviews from "../components/Reviews";
import TopDestinations from "../components/TopDestinations";

function Home() {
  return (
    <div className="bg-indigo-100">
      <Featuresin />
      <PopularDestinations />
      <TopDestinations />
      <RecentTrips />
      <Reviews />
    </div>
  );
}

export default Home;
