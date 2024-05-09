import React from "react";
import { Home } from "../Pages/Home";
import { About } from "./About";
import { Customer } from "./Customer";
import Layout from "../components/Layout/Layout";

export const Main = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Customer />
    </Layout>
  );
};
