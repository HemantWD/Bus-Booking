import React from "react";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { SideBar } from "../components/AvailableBus/SideBar";
import { BusList } from "../components/AvailableBus/BusList";
import classes from "./styles/AvailableBus.module.css";

export const AvailableBus = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <SideBar />
        </div>
        <div className={classes.availablebus}>
          <BusList />
          <BusList />
          <BusList />
          <BusList />
          <BusList />
          <BusList />
        </div>
      </div>
      <Footer />
    </>
  );
};
