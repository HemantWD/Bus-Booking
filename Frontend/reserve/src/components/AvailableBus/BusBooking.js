import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { BusCardInfo } from "../InfoPage/BusCardInfo";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

export const BusBooking = () => {
  // const formData = useSelector((state) => state.passenger);

  const bookingTitles = [
    "Ticket ID:",
    "Payment ID:",
    "Passenger Details:",
    "Contact Details:",
  ];
  const bookingValues = [
    "H3M175",
    "2545-326E3-7HHH",
    `Hemant Ajay Sharma, Male , 26 yrs`,
    `9024082738`,
  ];
  return (
    <div className=" px-64 border-4 border-gray-600 rounded-md shadow-lg shadow-slate-600">
      <div className=" mt-4 text-6xl text-green-800 flex items-center justify-center">
        <TiTickOutline className=" border-2 border-green-800 rounded-full" />
      </div>
      <div className=" pb-4 text-2xl font-bold text-center">
        Booking has been confirmed
      </div>
      <div className=" flex justify-center text-gray-500 ">
        <div className="mx-2 text-right">
          {bookingTitles.map((bookingTitle, id) => (
            <div key={id} className=" mb-2">
              {bookingTitle}
            </div>
          ))}
        </div>
        <div className=" mx-2 text-right">
          {bookingValues.map((bookingValue, id) => (
            <div key={id} className=" mb-2">
              {bookingValue}
            </div>
          ))}
        </div>
      </div>
      <div className=" mb-2">
        <BusCardInfo />
      </div>
      <button className=" mb-8 rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500">
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
};
