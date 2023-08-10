import React from "react";
import classes from "./styles/InfoPage.module.css";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { BusCardInfo } from "../components/InfoPage/BusCardInfo";
import { DetailsCard } from "../components/InfoPage/DetailsCard";
import { FareDetailsCard } from "../components/InfoPage/FareDetailsCard";

export const InfoPage = () => {
  return (
    <>
      <Header />
      <div className={classes["info-page"]}>
        <div className={classes["bus-info-card"]}>
          <BusCardInfo />
          <div className={classes["travel-details"]}>Enter travel details</div>
          <DetailsCard />
        </div>
        <FareDetailsCard />
      </div>
      <Footer />
    </>
  );
};
