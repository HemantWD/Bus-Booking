import React from "react";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { SideBar } from "../components/AvailableBus/SideBar";
import { BusList } from "../components/AvailableBus/BusList";

export const AvailableBus = () => {
  return (
    <>
      <Header />
      <div className="flex justify-around items-start">
        <div className="flex flex-col">
          <SideBar />
        </div>
        <div className="flex flex-col items-center w-full">
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
