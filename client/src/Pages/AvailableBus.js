import React, { useEffect, useState } from "react";

import { SideBar } from "../components/AvailableBus/SideBar";
import { BusList } from "../components/AvailableBus/BusList";
import axios from "axios";
import Layout from "../components/Layout/Layout";

export const AvailableBus = () => {
  const [busData, setBusData] = useState([]);

  const getBusData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/busData`
    );
    setBusData(response.data.bus);
    console.log(response.data.bus);
  };

  useEffect(() => {
    getBusData();
  }, []);

  return (
    <Layout>
      <div className="flex justify-around items-start">
        <div className="flex flex-col">
          <SideBar />
        </div>
        <div className="flex flex-col items-center w-full mt-5">
          {busData.map((bus) => (
            <BusList
              name={bus.BusName}
              rating={bus.Rating}
              from={bus.FromTime}
              to={bus.ToTime}
              interval={bus.TimeInterval}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
