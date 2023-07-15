import React from "react";
import { Header } from "../components/Layout/Header";
import { Home } from "../Pages/Home";
import { About } from "./About";
import { Customer } from "./Customer";
import Footer from "../components/Layout/Footer";

export const Main = () => {
  return (
    <>
      <Header />
      <div>
        <Home />
        <About />
        <Customer />
      </div>
      <Footer />
    </>
  );
};
