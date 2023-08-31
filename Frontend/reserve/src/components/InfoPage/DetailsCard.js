import React from "react";
import classes from "../css/DetailsCard.module.css";

export const DetailsCard = () => {
  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.detailsCard}>
      <form className={classes.passengerInfo}>
        <div className={classes.passengerTitle}>
          <span>Passenger 1</span>
          <span className={classes.seatNumber}>Seat 16</span>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputField}>
            <label className={classes.label}>Name</label>
            <input
              type="text"
              className={classes.input}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className={classes.inputField}>
            <label className={classes.label}>Gender</label>
            <select
              name="gender"
              className={classes.input}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={classes.inputField}>
            <label className={classes.label}>Age (in yrs)</label>
            <input
              type="number"
              className={classes.input}
              onChange={handleChange}
              name="age"
            />
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputField}>
            <label className={classes.label}>Email</label>
            <input
              type="email"
              className={classes.input}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className={classes.inputField}>
            <label className={classes.label}>Mobile No</label>
            <input
              type="text"
              className={classes.input}
              onChange={handleChange}
              name="mobileNo"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
