import React from "react";
import Button from "./Button";
import classes from "./Header.module.css";

export const Header = (props) => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.brand}>Reserve</li>
        <li>
          <a href="/">Ticket</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <ul>
        <Button>Login</Button>
        <Button>Register</Button>
      </ul>
    </nav>
  );
};
