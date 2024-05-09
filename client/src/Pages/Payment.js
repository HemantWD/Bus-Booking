import React from "react";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { BusBooking } from "../components/AvailableBus/BusBooking";
import Layout from "../components/Layout/Layout";

export const Payment = () => {
  return (
    <Layout>
      <div className=" my-10 mx-10">
        <BusBooking />
      </div>
    </Layout>
  );
};
