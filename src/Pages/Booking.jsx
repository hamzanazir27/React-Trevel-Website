import RecentTrips from "../components/RecentTrips";
import TopDestinations from "../components/TopDestinations";

function Booking() {
  return (
    <div className=" from-blue-50 to-white py-10  ">
      <div className="max-w-8xl mx-auto space-y-10">
        <section className="bg-white/70 shadow-lg rounded-2xl p-8">
          <RecentTrips />
        </section>

        <section className="bg-white/70 shadow-lg rounded-2xl p-8">
          <TopDestinations />
        </section>

        {/* <section className=" shadow-lg rounded-2xl p-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
            Upcoming Trips
          </h2>
          <div className="overflow-auto border-2 border-blue-300 rounded-lg shadow-inner">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia%2FKarachi"
              //   width="800"
              height="600"
              title="Trip Calendar"
              className="w-full h-[600px] rounded-lg"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Booking;
