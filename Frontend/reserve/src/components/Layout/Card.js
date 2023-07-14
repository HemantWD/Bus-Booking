import React from "react";
import classes from "../css/Card.module.css";

export const Card = ({ image, title, text }) => {
  return (
    <div className={classes.card}>
      <img className={classes.img} src={image} alt="..." />
      <div className={classes.body}>
        <h5 className={classes.title}>{title}</h5>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};
