import React from "react";
import classes from "../css/Footer.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer>
      <div className={classes.left}>
        <h4>RESERVE</h4>
        <p>Where you have a choice. Choose Reserve</p>
        <p>
          Reserve offers bus tickets Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut, perspiciatis.
        </p>
      </div>
      <div className={classes.right}>
        <div className={classes.column}>
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={classes.column}>
          <h4>Useful Links</h4>
          <ul>
            <li>Careers</li>
            <li>FAQ</li>
            <li>T & C</li>
            <li>Privacy Policy </li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={classes.column}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
