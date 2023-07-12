import React from "react";
import Button from "./Button";

export const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>Reserve</li>
        <li>Ticket</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <Button>Login</Button>
      </ul>
    </nav>
  );
};
