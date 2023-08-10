import React from "react";
import classes from "../css/FareDetailsCard.module.css";
import { Link } from "react-router-dom";

export const FareDetailsCard = () => {
  return (
    <div className={classes["fare-card"]}>
      <div className={classes["fare-details"]}>
        <div className={classes["fare-title"]}>Fare Details</div>
        <div className={classes.container}>
          <div className={classes.fare}>Base Fare</div>
          <div className={classes.price}>&#8377; 799</div>
        </div>
        <div className={classes.container}>
          <div className={classes.fare}>Tax</div>
          <div className={classes.price}>&#8377;150</div>
        </div>
        <div className={classes.container}>
          <div className={classes.fare}>Offer Applied</div>
          <div className={classes.price}>&#8377;50</div>
        </div>
        <div className={classes.container}>
          <div className={classes.fare}>Total Price</div>
          <div className={classes.price}>&#8377;899</div>
        </div>
        <button className={classes.btn}>
          <Link to="/payment" className={classes.link}>
            Proceed to Payment
          </Link>
        </button>
      </div>
    </div>
  );
};
