import React from "react";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { BusBooking } from "../components/AvailableBus/BusBooking";

export const Payment = () => {
  return (
    <>
      <Header />
      <div className=" my-10 mx-10">
        <BusBooking />
      </div>
      <Footer />
    </>
  );
};
