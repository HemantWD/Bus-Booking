import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import wallpaper from "../assets/bus.jpg";

export const Home = () => {
  const [statesData, setStatesData] = useState([]);
  const [selectedFromDistricts, setSelectedFromDistricts] = useState("");
  const [selectedToDistricts, setSelectedToDistricts] = useState("");

  const getStates = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/state/districts`
      );
      // console.log(response.data.states);
      const allDistricts = response.data.states
        .flatMap((state) => state.districts)
        .sort((a, b) => a.localeCompare(b));

      // console.log(allDistricts);
      setStatesData(allDistricts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <div className="w-full h-screen relative">
      <img
        src={wallpaper}
        className="w-full h-full object-cover"
        alt="background"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 z-50">
        <div className="flex  h-20 w-full py-1 px-3 text-lg">
          <select
            value={selectedFromDistricts}
            onChange={(e) => setSelectedFromDistricts(e.target.value)}
            className="border border-black mx-2.5 my-2.5 rounded-lg px-3 py-3"
          >
            <option value="">From</option>
            {statesData.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
          <select
            value={selectedToDistricts}
            onChange={(e) => setSelectedToDistricts(e.target.value)}
            className="border border-black mx-2.5 my-2.5 rounded-lg px-3 py-3"
          >
            <option value="">To</option>
            {statesData.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
          ]
          <input
            type="date"
            className="border border-black mx-2.5 my-2.5 px-3 py-3 rounded-lg"
          />
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
