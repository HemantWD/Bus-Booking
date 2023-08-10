import React from "react";
import classes from "./styles/Payment.module.css";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { BusBooking } from "../components/AvailableBus/BusBooking";

export const Payment = () => {
  return (
    <>
      <Header />
      <div className={classes.booking}>
        <BusBooking />
      </div>
      <Footer />
    </>
  );
};
