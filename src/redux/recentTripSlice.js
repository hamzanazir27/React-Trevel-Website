import { createSlice, nanoid } from "@reduxjs/toolkit";

const storageHelpers = {
  getStoredTrips: () => {
    try {
      if (typeof Storage === "undefined" || !window.localStorage) {
        console.warn("localStorage is not available in this environment");
        return null;
      }

      const stored = localStorage.getItem("recentTrips");

      if (!stored) {
        return null;
      }

      const parsedData = JSON.parse(stored);

      if (!Array.isArray(parsedData)) {
        console.warn("Invalid stored trips format - not an array");
        return null;
      }

      return parsedData;
    } catch (error) {
      console.error("Error parsing stored trips:", error);
      try {
        localStorage.removeItem("recentTrips");
      } catch (e) {
        console.error("Could not clear corrupted localStorage:", e);
      }
      return null;
    }
  },

  updateLocalStorage: (trips) => {
    try {
      // Check if localStorage is available
      if (typeof Storage === "undefined" || !window.localStorage) {
        console.warn("localStorage is not available - data will not persist");
        return false;
      }

      // Validate trips data
      if (!Array.isArray(trips)) {
        console.error(
          "Cannot save to localStorage - trips is not an array:",
          trips
        );
        return false;
      }

      const serialized = JSON.stringify(trips);
      localStorage.setItem("recentTrips", serialized);

      // Verify the save worked
      const verification = localStorage.getItem("recentTrips");
      if (verification === serialized) {
        console.log("Successfully saved trips to localStorage");
        return true;
      } else {
        console.error("localStorage save verification failed");
        return false;
      }
    } catch (error) {
      console.error("Error saving trips to localStorage:", error);

      // Check if it's a quota exceeded error
      if (
        error.name === "QuotaExceededError" ||
        error.name === "NS_ERROR_DOM_QUOTA_REACHED"
      ) {
        console.error(
          "localStorage quota exceeded - consider cleaning old data"
        );
      }

      return false;
    }
  },

  clearStorage: () => {
    try {
      localStorage.removeItem("recentTrips");
      console.log("localStorage cleared successfully");
      return true;
    } catch (error) {
      console.error("Error clearing localStorage:", error);
      return false;
    }
  },
};

const dummyTripsData = [
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

const storedTrips = storageHelpers.getStoredTrips();
const initialTrips = storedTrips || dummyTripsData;

if (!storedTrips && initialTrips === dummyTripsData) {
  console.log("Initializing localStorage with default trips data");
  storageHelpers.updateLocalStorage(initialTrips);
}

const initialState = {
  trips: initialTrips,
  isLoading: false,
  error: null,
};

const recentTripSlice = createSlice({
  name: "recentTrips",
  initialState,

  reducers: {
    addRecentTrip: (state, action) => {
      try {
        if (!action.payload || typeof action.payload !== "object") {
          console.error(
            "Invalid trip data provided to addRecentTrip:",
            action.payload
          );
          state.error = "Invalid trip data";
          return;
        }

        const trip = {
          id: nanoid(),
          tripsinfo: { ...action.payload },
        };

        state.trips.unshift(trip);
        state.error = null;

        const success = storageHelpers.updateLocalStorage(state.trips);
        if (!success) {
          state.error = "Failed to save trip to storage";
        }

        console.log("Trip added successfully:");
      } catch (error) {
        console.error("Error adding trip:", error);
        state.error = "Failed to add trip";
      }
    },

    deleteRecentTrips: (state, action) => {
      try {
        const tripId = action.payload;

        if (!tripId) {
          console.error("No trip ID provided for deletion");
          state.error = "Invalid trip ID";
          return;
        }

        const originalLength = state.trips.length;
        state.trips = state.trips.filter((trip) => trip.id !== tripId);

        if (state.trips.length === originalLength) {
          console.warn("Trip not found for deletion:", tripId);
          state.error = "Trip not found";
          return;
        }

        state.error = null;

        // Update localStorage
        const success = storageHelpers.updateLocalStorage(state.trips);
        if (!success) {
          state.error = "Failed to update storage after deletion";
        }

        console.log("Trip deleted successfully:");
      } catch (error) {
        console.error("Error deleting trip:", error);
        state.error = "Failed to delete trip";
      }
    },

    editRecentTrips: (state, action) => {
      try {
        const { id, updatedInfo } = action.payload;

        if (!id || !updatedInfo) {
          console.error(
            "Invalid data provided to editRecentTrips:",
            action.payload
          );
          state.error = "Invalid update data";
          return;
        }

        const tripIndex = state.trips.findIndex((trip) => trip.id === id);

        if (tripIndex === -1) {
          console.error("Trip not found for editing:", id);
          state.error = "Trip not found";
          return;
        }

        state.trips[tripIndex] = {
          id,
          tripsinfo: { ...updatedInfo },
        };

        state.error = null;

        const success = storageHelpers.updateLocalStorage(state.trips);
        if (!success) {
          state.error = "Failed to save changes to storage";
        }

        console.log("Trip updated successfully:");
      } catch (error) {
        console.error("Error editing trip:", error);
        state.error = "Failed to update trip";
      }
    },

    // clearError: (state) => {
    //   state.error = null;
    // },

    // Utility action to manually sync with localStorage
    // syncWithStorage: (state) => {
    //   try {
    //     const storedTrips = storageHelpers.getStoredTrips();
    //     if (storedTrips) {
    //       state.trips = storedTrips;
    //       state.error = null;
    //       console.log("Synced with localStorage successfully");
    //     }
    //   } catch (error) {
    //     console.error("Error syncing with storage:", error);
    //     state.error = "Failed to sync with storage";
    //   }
    // },

    // Action to clear all storage and reset to defaults
    // resetToDefaults: (state) => {
    //   try {
    //     storageHelpers.clearStorage();
    //     state.trips = dummyTripsData;
    //     state.error = null;
    //     storageHelpers.updateLocalStorage(state.trips);
    //     console.log("Reset to default trips data");
    //   } catch (error) {
    //     console.error("Error resetting to defaults:", error);
    //     state.error = "Failed to reset data";
    //   }
    // },
  },
});

export const { addRecentTrip, deleteRecentTrips, editRecentTrips } =
  recentTripSlice.actions;

export default recentTripSlice.reducer;
