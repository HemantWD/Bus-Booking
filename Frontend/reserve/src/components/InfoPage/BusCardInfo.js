import React from "react";

export const BusCardInfo = () => {
  return (
    <div>
      <div className=" border-2 border-gray-600 rounded-md">
        <div className=" p-4 text-left">
          <div className=" flex">
            <div className=" font-bold">
              <span className=" text-xl" id="busName">
                Mumbai
              </span>
              <span className=" p-1 ml-2 rounded-md bg-green-700 text-white">
                <ion-icon name="star-outline"></ion-icon>5 star
              </span>
              <span className=" px-2 text-xs text-gray-400">Ratings</span>
            </div>
            <div className=" flex py-2 text-sm">
              <div>
                <span className=" pr-2 border-r">AC Sleeper (2-1)</span>
              </div>
            </div>
            <div className=" flex py-2">
              <span className=" pr-2 text-lg font-semibold" id="fromTime">
                18:30 PM <br />
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  09Aug2023
                </span>
              </span>
            </div>
            <div className="flex py-2">
              <span className=" px-2 text-center align-middle">
                ---------- 12:30 hr ---------
              </span>
            </div>
            <div className="flex py-2">
              <span className=" pr-2 text-lg font-semibold" id="toTime">
                06:30 AM <br />
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  09Aug2023
                </span>
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-around my-2">
            <div className="text-sm">
              <div className=" text-xl font-semibold" id="fromLocation">
                Maharashtra
              </div>
              <div className="text-gray-500 w-4/6">
                Taxi Stand, Chhatrapati road
              </div>
            </div>
            <div className="text-sm">
              <div className="text-xl font-semibold" id="toLocation">
                Rajasthan
              </div>
              <div className=" text-gray-500 w-4/6">
                Taxi Stand, Chhatrapati road
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
