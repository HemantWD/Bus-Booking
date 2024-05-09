import React from "react";
import { SeatPrice } from "./SeatPrice";
import { SeatLayout } from "./SeatLayout";
import BusTicket from "./BusTicket";

const BookSeat = () => {
  return (
    <>
      <div className=" w-full min-h-full py-0 px-5 border-t-2 border-gray-400">
        <div className="heading">
          <h3>Select Seats</h3>
        </div>
        <div className="select-price">
          <div className="mt-1">
            <SeatPrice />
          </div>
        </div>
        <div className="w-full flex py-3 px-0">
          <div className="w-2/4">
            <SeatLayout />
          </div>
          <div className="mt-3">
            <BusTicket />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSeat;
