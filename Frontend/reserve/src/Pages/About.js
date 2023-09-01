import React from "react";
import { Card } from "../components/Layout/Card";
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
    <div className="pt-5">
      <div className="text-center">
        <p className="text-3xl font-bold font-serif">
          India's Fastest Bus Service
        </p>
      </div>
      <div className="flex justify-around items-center py-8 px-0">
        {dummyData.map((value, index) => (
          <Card
            image={value.image}
            key={index}
            title={value.title}
            text={value.text}
          />
        ))}
      </div>
    </div>
  );
};
