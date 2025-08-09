import { createSlice, nanoid } from "@reduxjs/toolkit";

const getStoredTrips = () => {
  try {
    const stored = localStorage.getItem("recentTrips");
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Error parsing stored trips:", error);
    return null;
  }
};

const dummyTripsData = getStoredTrips() || [
  {
    id: "JSK6MDFZSKdHeqUXatYgt",
    tripsinfo: {
      date: "2024-03-15",
      description:
        "Explore the breathtaking beauty of Hunza Valley with stunning mountain views and local culture",
      duration: "5 Days",
      extraImages: [
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      heading: "Hunza Valley Adventure",
      mainImage:
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "25000",
      tags: ["Family", "Views", "Local Food"],
      type: "Nature",
    },
  },
  {
    id: "ABC123XYZ789DEFGH456",
    tripsinfo: {
      date: "2024-04-20",
      description:
        "Experience the majestic beauty of Skardu with crystal clear lakes and towering peaks",
      duration: "7 Days",
      extraImages: [
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      heading: "Skardu Mountain Expedition",
      mainImage:
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "35000",
      tags: ["Adventure", "Mountains", "Trekking"],
      type: "Adventure",
    },
  },
  {
    id: "MNP789QRS456TUV123",
    tripsinfo: {
      date: "2024-05-10",
      description:
        "Discover the serene beauty of Fairy Meadows with spectacular views of Nanga Parbat",
      duration: "4 Days",
      extraImages: [
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      heading: "Fairy Meadows Trek",
      mainImage:
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "18000",
      tags: ["Trekking", "Views", "Camping"],
      type: "Nature",
    },
  },
  {
    id: "DEF456GHI789JKL012",
    tripsinfo: {
      date: "2024-06-05",
      description:
        "Explore the cultural richness of Swat Valley with lush green landscapes",
      duration: "3 Days",
      extraImages: [
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      heading: "Swat Valley Cultural Tour",
      mainImage:
        "https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "15000",
      tags: ["Culture", "Family", "History"],
      type: "Cultural",
    },
  },
  {
    id: "XYZ789ABC123DEF456",
    tripsinfo: {
      date: "2024-07-12",
      description:
        "Adventure through the rugged terrain of K2 Base Camp with experienced guides",
      duration: "14 Days",
      extraImages: [
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      heading: "K2 Base Camp Expedition",
      mainImage:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
      price: "75000",
      tags: ["Extreme", "Trekking", "Challenge"],
      type: "Expedition",
    },
  },
  {
    id: "GHI012JKL345MNO678",
    tripsinfo: {
      date: "2024-08-18",
      description:
        "Relax and rejuvenate in the beautiful hill station of Murree",
      duration: "2 Days",
      extraImages: [
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      ],
      heading: "Murree Weekend Getaway",
      mainImage:
        "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
      price: "8000",
      tags: ["Weekend", "Family", "Relaxation"],
      type: "Leisure",
    },
  },
];

const updateLocalStorage = (trips) => {
  try {
    localStorage.setItem("recentTrips", JSON.stringify(trips));
  } catch (error) {
    console.error("Error saving trips to localStorage:", error);
  }
};

const initialState = {
  trips: dummyTripsData,
};

const recentTripSlice = createSlice({
  name: "recentTrips",
  initialState,

  reducers: {
    addRecentTrip: (state, action) => {
      const trip = {
        id: nanoid(),
        tripsinfo: { ...action.payload },
      };

      state.trips.push(trip);
      updateLocalStorage(state.trips);
    },

    deleteRecentTrips: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
      updateLocalStorage(state.trips);
    },

    editRecentTrips: (state, action) => {
      const { id, updatedInfo } = action.payload;

      state.trips = state.trips.map((trip) =>
        trip.id === id ? { id, tripsinfo: { ...updatedInfo } } : trip
      );

      updateLocalStorage(state.trips);
    },
  },
});

export const { addRecentTrip, deleteRecentTrips, editRecentTrips } =
  recentTripSlice.actions;

export default recentTripSlice.reducer;
