import React, { useState } from "react";
import classes from "../css/BookSeat.module.css";
import { SeatLayout } from "./SeatLayout";
import { useNavigate } from "react-router-dom";

const BookSeat = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const handleOnchangeHandler = (option) => {
    setSelected(option);
  };

  const bookingHandler = () => {
    navigate("/payment");
    // try{
    //   const response = await fetch("http://localhost:5000/trips/ticket-details",{
    //     method:"POST",
    //     headers:{
    //       "Content-Type":"application/json",
    //     },
    //     body:JSON.stringify()
    //   })
    // }catch(error){
    //   console.log(error)
    // }
  };

  return (
    <>
      <div className={classes.select}>
        <h3 className={classes.heading}>Select Seats</h3>
        <div className={classes.seat}>
          <div className={classes.row}>
            <h3>Seat Price</h3>
            <div className={classes.box}>
              <input type="radio" />
              <p>All</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$699</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$899</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$1199</p>
            </div>
            <div className={classes.box}>
              <input type="radio" />
              <p>$1599</p>
            </div>
          </div>

          <div className={classes.selected}>
            <div className={classes.fill}>
              <input
                type="radio"
                id="Option 1"
                value="Option 1"
                checked={selected === "Option 1"}
                onChange={() => handleOnchangeHandler("Option 1")}
              />
              <label htmlFor="Option 1">Vacant Seats</label>
            </div>
            <div className={classes.fill}>
              <input
                type="radio"
                id="Option 2"
                value="Option 2"
                checked={selected === "Option 2"}
                onChange={() => handleOnchangeHandler("Option 2")}
              />
              <label htmlFor="Option 2">Reserved Seats</label>
            </div>
            <div className={classes.fill}>
              <input
                type="radio"
                id="Option 3"
                value="Option 3"
                checked={selected === "Option 3"}
                onChange={() => handleOnchangeHandler("Option 3")}
              />
              <label htmlFor="Option 3">Your Seats</label>
            </div>
          </div>
        </div>

        <div className={classes.selectSeats} style={{ display: "flex" }}>
          <SeatLayout />
          <div className={classes.right}>
            <h3>Boarding & Droping</h3>
            <h4>Jaipur</h4>
            <p>
              Sindhi Camp | Jaipur
              <span className={classes.bTime}>17:45 PM</span>
            </p>
            <h4>Ahmedabad</h4>
            <p>
              Namaste Circle
              <span className={classes.dTime}>08:00 AM</span>
            </p>
            <hr />
            <p>
              Serial No : <span>7</span>
            </p>
            <hr />
            <h4>Fair Details</h4>
            <p>
              Amount : <span>INR 750.00</span>
            </p>
            <p>Includes all fair charges</p>
            <button className={classes.btn} onClick={bookingHandler}>
              Proceed To Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSeat;
