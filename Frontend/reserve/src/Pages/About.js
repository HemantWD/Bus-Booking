import React from "react";
import { Card } from "../components/Layout/Card";
import classes from "./styles/About.module.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpeg";

const dummyData = [
  {
    image: card1,
    title: "2000+",
    text: "Bus Collections",
  },
  {
    image: card2,
    title: "20 Million",
    text: "Happy Customers",
  },
  {
    image: card3,
    title: "5000+",
    text: "Tickets Booked Everyday",
  },
];

export const About = (props) => {
  return (
    <div className={classes.about}>
      <div className={classes.title}>
        <h1>India's Fastest Bus Service</h1>
      </div>
      <div className={classes.card}>
        {dummyData.map((value) => (
          <Card image={value.image} title={value.title} text={value.text} />
        ))}
      </div>
    </div>
  );
};
