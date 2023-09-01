import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../../redux/sample";

const BusTicket = () => {
  const selectedSeats = useSelector((state) => state.seat);
  const totalAmount = selectedSeats.reduce((total, seat) => {
    const seatInfo = data[0].seats.upper.find(
      (s) => s.seatNumber === seat.seatNumber
    );
    return total + seatInfo.price;
  }, 0);

  return (
    <div className="flex flex-col justify-between py-1 px-3 w-full shadow-lg shadow-slate-600 ml-6 rounded-2xl">
      <div className=" text-lg font-semibold text-center">
        <h3 className="text-lg font-bold">Boarding and Dropping</h3>
      </div>
      <br />
      <div className="flex justify-between">
        <div className="">
          <p className=" text-lg font-medium ">Ahmedabad</p>
          <p className=" text-base">Taxi Stand, Mughal Roaddd</p>
        </div>
        <div className=" text-lg font-medium">
          <p>18:00 hrs</p>
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <div className="">
          <p className="text-lg font-medium">Jaipur </p>
          <p className="text-base">Sindhi Camp, Polo Victory</p>
        </div>
        <div className=" text-lg font-medium">
          <p>08:00 hrs</p>
        </div>
      </div>
      <div className="flex justify-between text-lg font-medium">
        <p>Seat No.</p>
        {selectedSeats.map((seat) => (
          <p className=" text-base" key={seat.seatNumber}>
            {seat.seatNumber}
          </p>
        ))}
      </div>
      <div className="fare-details">
        <div className="text-lg font-semibold text-center">
          <p>Fare Details</p>
        </div>
        <div className="flex justify-between">
          <div className="fare-amount">
            <p className=" text-lg font-medium">Amount</p>
          </div>
          <div className=" text-lg font-medium">
            <p>INR {totalAmount} </p>
          </div>
        </div>
      </div>
      <br />
      <div className=" flex justify-center mb-5">
        <button className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500">
          <Link to="/info-page" className="link">
            Proceed To Book
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BusTicket;
