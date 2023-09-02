import React from "react";
import { useSelector } from "react-redux";

export const DetailsCard = () => {
  const selectedSeats = useSelector((state) => state.seat);
  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" border-2 border-gray-700 rounded-md">
      <form className=" p-4 text-left">
        <div className=" font-bold">
          <span>Passenger 1</span>
          {selectedSeats.map((seat) => (
            <span className="ml-3 font-normal" key={seat.seatNumber}>
              Seat {seat.seatNumber}{" "}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-around">
          <div className=" py-2">
            <label className=" text-gray-600">Name</label>
            <input
              type="text"
              className=" block relative flex-auto py-2 px-3 m-3 my-2 border-2 border-gray-400 rounded w-80 text-base font-normal bg-clip-padding "
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="py-2">
            <label className=" text-gray-600">Gender</label>
            <select
              name="gender"
              className=" block relative flex-auto py-2 px-3 m-3 my-2 border-2 border-gray-400 rounded w-40 text-base font-normal bg-clip-padding"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="py-2">
            <label className="text-gray-600">Age (in yrs)</label>
            <input
              type="number"
              className=" block relative flex-auto py-2 px-3 m-3 my-2 border-2 border-gray-400 rounded w-36 text-base font-normal bg-clip-padding"
              onChange={handleChange}
              name="age"
            />
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className=" py-2">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              className="block relative flex-auto py-2 px-3 m-3 my-2 border-2 border-gray-400 rounded w-80 text-base font-normal bg-clip-padding"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className=" py-2">
            <label className=" text-gray-600">Mobile No</label>
            <input
              type="text"
              className="block relative flex-auto py-2 px-3 m-3 my-2 border-2 border-gray-400 rounded w-80 text-base font-normal bg-clip-padding"
              onChange={handleChange}
              name="mobileNo"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
