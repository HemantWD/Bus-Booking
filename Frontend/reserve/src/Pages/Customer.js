import React from "react";
import classes from "./Customer.module.css";
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
    <div className={classes.heading}>
      <h1>Here's what a few of our customers have to say about us </h1>
      <div className={classes["cards-container"]}>
        {data.map((value, index) => (
          <div className={classes.card}>
            <div className={classes.image}>
              <img src={value.image} alt="profile" />
            </div>
            <div className={classes.info}>
              <h3 className={classes.name}>{value.name}</h3>
              <h6>{value.details}</h6>
              <p className={classes.review}>{value.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
