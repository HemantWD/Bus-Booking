import React from "react";
import { selectedSeat, deselectSeat } from "../../redux/seatSlice";
import { useDispatch, useSelector } from "react-redux";
import data from "../../redux/sample";

export const SeatLayout = () => {
  const selectedSeats = useSelector((state) => state.seat);
  const dispatch = useDispatch();

  const handleClick = (seatNumber, id) => {
    const isSelected = selectedSeats.some(
      (seat) => seat.seatNumber === seatNumber
    );
    if (isSelected) {
      dispatch(deselectSeat({}));
    } else {
      dispatch(selectedSeat({ seatNumber, id }));
    }
    console.log(seatNumber);
  };

  return (
    <div className=" w-full shadow-lg shadow-slate-700 p-4 m-4 rounded-2xl">
      <h2 className="font-serif text-center text-lg font-bold py-4 px-0">
        Upper Seat
      </h2>
      <div className=" gap-3 grid grid-cols-7">
        {data[0].seats.upper.map((seat) => (
          <div
            key={seat.seatNumber}
            onClick={() => handleClick(seat.seatNumber, data[0]._id)}
            className=" flex justify-center items-center w-10 cursor-pointer border-2 border-gray-400 rounded-xl h-6 "
            style={{
              backgroundColor: selectedSeats.some(
                (selectedSeat) => selectedSeat.seatNumber === seat.seatNumber
              )
                ? "green"
                : "",
            }}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>
      <h2 className="font-serif text-center text-lg font-bold py-4 px-0">
        Lower Seat
      </h2>
      <div className="gap-3 grid grid-cols-7">
        {data[0].seats.lower.map((seat) => (
          <div
            key={seat.seatNumber}
            onClick={() => handleClick(seat.seatNumber, data[0]._id)}
            className="flex justify-center items-center w-10 cursor-pointer border-2 border-gray-400 rounded-xl h-6"
            style={{
              backgroundColor: selectedSeats.some(
                (selectedSeat) => selectedSeat.seatNumber === seat.seatNumber
              )
                ? "green"
                : "",
            }}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>
    </div>
  );
};
