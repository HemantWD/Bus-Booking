import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import wallpaper from "../assets/bus.jpg";

export const Home = () => {
  const [statesData, setStatesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getStates = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/state/districts`
      );
      // console.log(response.data.states);
      setStatesData(response.data.states);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = statesData.filter(
        (stateObj) =>
          stateObj.state.toLowerCase().includes(query.toLowerCase()) ||
          stateObj.district.some((district) =>
            district.toLowerCase().includes(query.toLowerCase())
          )
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (value) => {
    setSearchQuery(value);
    setSuggestions([]);
  };

  return (
    <div className="w-full h-screen relative">
      <img
        src={wallpaper}
        className="w-full h-full object-cover"
        alt="background"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 z-50">
        <div className="flex  h-20 w-full py-1 px-3 text-lg">
          <input
            type="text"
            className="border border-black mx-2.5 my-2.5 px-3 py-3 rounded-lg"
            placeholder="From"
          />
          <input
            type="text"
            className="border border-black mx-2.5 my-2.5 px-3 py-3 rounded-lg"
            placeholder="To"
          />
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
