import { create } from "zustand";

export const useBusStops = create((set) => ({
  busStops: [],

  setBusStops: (busStops) => set({ busStops }),

  fetchBusStops: async () => {
    try {
      const res = await fetch("/api/busstops");
      const busStops = await res.json();
      set({ busStops });
    } catch (error) {
      console.error("Failed to fetch bus stops:", error);
    }
  },

  addBusStop: async (busStop) => {
    try {
      const res = await fetch("/api/busstops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(busStop),
      });

      const newBusStop = await res.json();

      // Ensure newBusStop is valid before updating state
      if (newBusStop && newBusStop.location) {
        set((state) => ({
          busStops: [...state.busStops, newBusStop],
        }));
      }
    } catch (error) {
      console.error("Failed to add bus stop:", error);
    }
  },
}));
