import React from "react";
import classes from "../css/Header.module.css";
import { BsBusFront } from "react-icons/bs";

export const Header = (props) => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <BsBusFront />
        <li className={classes.brand}>Reserve</li>
        <li>
          <a href="/">Ticket</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <ul>
        <button className={classes.btn}>Login</button>
        <button className={classes.btn}>Register</button>
      </ul>
    </nav>
  );
};
