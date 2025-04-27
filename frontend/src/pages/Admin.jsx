import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/admin/sidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-4 max-w-[1200px] mx-auto">
          <Header />
          <div className="mt-6">
            <Outlet /> {/* This will render the nested admin pages */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
