import React, { useEffect, useState } from "react";
import axios from "axios";

export const BusCardLeft = () => {
  const [busData, setBusData] = useState([]);

  const getBusData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/busData`
    );
    console.log(response.data);
  };

  useEffect(() => {
    getBusData();
  }, []);
  return (
    <div className=" w-full flex flex-col justify-between py-3 px-5">
      <div className="flex items-center text-xl">
        <h2 className="font-serif text-center text-lg font-bold">
          InterCity Smart Bus{" "}
        </h2>
        <div className="bg-green-600 border rounded-md w-10 h-5 text-sm ml-4 font-normal text-center text-white">
          4.2
        </div>
      </div>
      <div>
        <h3 className=" text-sm font-medium">AC Seater / Sleeper</h3>
      </div>

      <div className=" text-sm font-medium mt-4">
        Departure
        <span className="text-xs  "> 15:40 PM</span>
        ---------- Arrival
        <span> 08:00 AM</span>
      </div>
      <div className=" font-normal text-gray-500 text-sm  mt-2 ">
        <ul className=" flex justify-between">
          <li>Live Tracking</li>
          <li>Policies</li>
          <li>Amenities</li>
          <li>Bus Photos</li>
          <li>Booking Polcies</li>
          <li>Reviews</li>
          <li>Rest Stop</li>
        </ul>
      </div>
    </div>
  );
};
