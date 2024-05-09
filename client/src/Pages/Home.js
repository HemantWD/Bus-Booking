import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../assets/bus.jpg";
import { SearchInput } from "../components/SearchInput";

export const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src={wallpaper}
        className="w-full h-full object-cover"
        alt="background"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 z-50">
        <div className="flex">
          <SearchInput type="text" placeholder="From" />
          <SearchInput type="text" placeholder="To" />
          <SearchInput type="date" placeholder="date" />
        </div>
        <div className="absolute w-full top-24 flex justify-center items-center">
          <button className="m-2.5 rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500">
            <Link to="/available-bus">Search</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
