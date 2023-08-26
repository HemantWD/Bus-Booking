import React from "react";
import classes from "../css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { BsBusFront } from "react-icons/bs";

export const Header = () => {
  // const [auth, setAuth] = useState();

  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate("/login");
  };
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <nav className={classes.navbar}>
      <ul>
        <BsBusFront />
        <a className={classes.brand} href="/">
          Reserve
        </a>
        <li>
          <a href="/">Ticket</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <ul>
        <button className={classes.btn} onClick={handleClick}>
          Register
        </button>
        <button className={classes.btn} onClick={handleOnclick}>
          Login
        </button>
      </ul>
    </nav>
  );
};
