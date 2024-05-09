import React, { useState } from "react";
import BookSeat from "./BookSeat";
import { BusCardLeft } from "./BusCardLeft";

export const BusList = () => {
  const [viewSeat, setViewSeat] = useState(false);

  const viewSeatHandler = () => {
    setViewSeat(!viewSeat);
  };
  return (
    <>
      <div className="w-full text-lg flex flex-col border shadow-lg shadow-gray-300 mb-2.5 rounded-lg">
        <div className="flex">
          <div className="w-4/5 flex flex-col justify-between py-3 px-5">
            <BusCardLeft />
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
    </>
  );
};
