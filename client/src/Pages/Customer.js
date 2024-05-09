import React from "react";
import profile from "../assets/profile.png";

const data = [
  {
    image: profile,
    name: "Kaustabh Sule",
    details: "Customer since 2020",
    review: "Awesome Travel experience with reserve. Excellent Staff.",
  },
  {
    image: profile,
    name: "Saksham Agarwal",
    details: "Customer since 2019",
    review: "Awesome Travel experience with reserve. Excellent Staff.",
  },
  {
    image: profile,
    name: "Baskui Venkat Pati",
    details: "Customer since 2021",
    review: "Awesome Travel experience with reserve. Excellent Staff.",
  },
];

export const Customer = () => {
  return (
    <div className="bg-slate-200 h-auto">
      <p className="text-3xl text-center mt-2 p-2.5 font-bold font-serif">
        Here's what a few of our customers have to say about us
      </p>
      <div className="flex justify-around flex-nowrap p-5">
        {data.map((value, index) => (
          <div
            className="w-80 bg-white border rounded-lg p-5 flex flex-row items-center shadow-xl shadow-slate-500"
            key={index}
          >
            <div className="relative mb-5">
              <img src={value.image} className="w-32 h-28" alt="profile" />
            </div>
            <div className="text-center">
              <p className="mb-2.5 text-xl font-bold">{value.name}</p>
              <p className="-mt-2 text-xs">{value.details}</p>
              <p className="mt-2 text-sm font-semibold">{value.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
