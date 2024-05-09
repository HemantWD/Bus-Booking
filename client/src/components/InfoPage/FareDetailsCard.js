import React from "react";
import { Link } from "react-router-dom";

export const FareDetailsCard = () => {
  return (
    <div className=" border-2 rounded-md border-gray-700 h-2/6 ml-3 basis-1/4">
      <div className=" p-4 rounded-md border-2">
        <div className=" text-lg font-bold text-center">Fare Details</div>
        <div className="flex font-semibold my-2 justify-between">
          <div className=" ">Base Fare</div>
          <div className=" ">&#8377; 799</div>
        </div>
        <div className="flex font-semibold my-2 justify-between">
          <div>Tax</div>
          <div>&#8377;150</div>
        </div>
        <div className="flex font-semibold my-2 justify-between">
          <div>Offer Applied</div>
          <div>&#8377;50</div>
        </div>
        <div className="flex font-semibold my-2 justify-between">
          <div>Total Price</div>
          <div>&#8377;899</div>
        </div>
        <div className=" flex items-center justify-center mt-5">
          <button className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500">
            <Link to="/payment">Proceed to Payment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
