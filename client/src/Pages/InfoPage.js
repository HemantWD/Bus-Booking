import React from "react";
import { BusCardInfo } from "../components/InfoPage/BusCardInfo";
import { DetailsCard } from "../components/InfoPage/DetailsCard";
import { FareDetailsCard } from "../components/InfoPage/FareDetailsCard";
import Layout from "../components/Layout/Layout";

export const InfoPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
