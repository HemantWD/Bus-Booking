import React, { useState } from "react";
import BookSeat from "./BookSeat";

export const BusList = ({ name, rating, from, to, interval }) => {
  const [viewSeat, setViewSeat] = useState(false);

  const viewSeatHandler = () => {
    setViewSeat(!viewSeat);
  };
  return (
    <div className="w-full text-lg flex flex-col border shadow-lg shadow-gray-300 mb-2.5 rounded-lg">
      <div className="flex">
        <div className="w-4/5 flex flex-col justify-between py-3 px-5">
          <div className=" w-full flex flex-col justify-between py-3 px-5">
            <div className="flex items-center text-xl">
              <h2 className="font-serif text-center text-lg font-bold">
                {name}
              </h2>
              <div className="bg-green-600 border rounded-md w-10 h-5 text-sm ml-4 font-normal text-center text-white">
                {rating}
              </div>
            </div>
            <div>
              <h3 className=" text-sm font-medium">AC Seater / Sleeper</h3>
            </div>

            <div className=" text-sm font-medium mt-4">
              <span className="text-base  "> {from}</span>
              -----{interval}-----
              <span className=" text-base"> {to}</span>
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
        </div>
        <div className="w-2/6 border-l-2 border-gray-400 flex flex-col justify-center items-center text-center p-2.5">
          <div className=" text-xl">
            <p className=" font-semibold mb-2.5">Trip Cost</p>
            <h3 className=" text-lg font-bold">Starts From</h3>
            <p className=" text-base font-bold">$800</p>
          </div>
          <div>
            <button
              className="rounded text-white bg-orange-600 font-bold py-1 px-4 hover:bg-indigo-500 duration-500"
              onClick={viewSeatHandler}
            >
              View Seats
            </button>
          </div>
        </div>
      </div>
      {viewSeat && <BookSeat />}
    </div>
  );
};
