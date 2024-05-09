import React from "react";
import { Header } from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { BusCardInfo } from "../components/InfoPage/BusCardInfo";
import { DetailsCard } from "../components/InfoPage/DetailsCard";
import { FareDetailsCard } from "../components/InfoPage/FareDetailsCard";

export const InfoPage = () => {
  return (
    <>
      <Header />
      <div className=" flex mx-10 mb-8 mt-20">
        <div className="mr-5">
          <BusCardInfo />
          <div className=" mb-4 mt-8 text-xl font-bold text-left ">
            Enter travel details
          </div>
          <DetailsCard />
        </div>
        <FareDetailsCard />
      </div>
      <Footer />
    </>
  );
};
