import React from "react";
import classes from "../css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { BsBusFront } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setUserAndToken } from "../../redux/authSlice";

export const Header = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserAndToken({ user: null, token: "" }));
    localStorage.removeItem("authData");
  };

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
        {!auth.user ? (
          <>
            <button className={classes.btn} onClick={handleClick}>
              Register
            </button>
            <button className={classes.btn} onClick={handleOnclick}>
              Login
            </button>
          </>
        ) : (
          <>
            <button className={classes.btn} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};
