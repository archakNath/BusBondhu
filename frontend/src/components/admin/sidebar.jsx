import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, BusFront, Share2 } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg fixed">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Admin Panel
      </div>

      <nav className="flex flex-col p-4 gap-2">
        <NavLink
          to="/admin/busstops"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
            }`
          }
        >
          <MapPin size={20} />
          Bus Stops
        </NavLink>

        <NavLink
          to="/admin/busroutes"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
            }`
          }
        >
          <BusFront size={20} />
          Bus Routes
        </NavLink>

        <NavLink
          to="/admin/connectingstops"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
            }`
          }
        >
          <Share2 size={20} />
          Connecting Stops
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
