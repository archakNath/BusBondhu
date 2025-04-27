import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import RoutePage from "./pages/RoutePage";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import BusStopsPage from "./pages/BusStopsPage";
import BusRoutesPage from "./pages/BusRoutesPage";
import ConnectingStopsPage from "./pages/ConnectingStopsPage";
function App() {
  return (
    // <div>
    //   <p className="text-3xl">BusBondhu</p>
    //   <p>{location ? location : "Fetching location..."}</p>
    //   <p>{nearestBusStop ? `Nearest Bus Stop: ${nearestBusStop}` : "Finding nearest bus stop..."}</p>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="busstops" element={<BusStopsPage />} />
          <Route path="busroutes" element={<BusRoutesPage />} />
          <Route path="connectingstops" element={<ConnectingStopsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
