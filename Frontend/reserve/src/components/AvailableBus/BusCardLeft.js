import React from "react";

export const BusCardLeft = () => {
  return (
    <div className=" w-4/5 flex flex-col justify-between py-3 px-5">
      <div>
        <div className="flex items-center text-xl">
          <h2 className="font-serif text-center text-lg font-bold">
            InterCity Smart Bus{" "}
          </h2>
          <div className="bg-green-600 border rounded-md w-10 h-5 text-sm ml-4 font-normal text-center text-white">
            4.2
          </div>
        </div>
        <div>
          <h3 className=" text-lg font-medium">AC Seater / Sleeper</h3>
        </div>
      </div>
      <div>
        <h3 className=" text-lg font-medium">
          <span>15:40 PM</span>
          <span>
            ---- {""} Hrs {} Min's ----{" "}
          </span>
          <span>08:00 AM</span>
        </h3>
      </div>
      <div className=" font-light cursor-pointer">
        <span className="mr-9">Live Tracking</span>
        <span className="mr-9">Policies</span>
        <span className="mr-9">Amenities</span>
        <span className="mr-9">Bus Photos</span>
        <span className="mr-9">Booking Polcies</span>
        <span className="mr-9">Reviews</span>
        <span className="mr-9">Rest Stop</span>
      </div>
    </div>
  );
};
