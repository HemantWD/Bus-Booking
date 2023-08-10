import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../assets/bus.jpg";
import classes from "./styles/Home.module.css";
import { SearchInput } from "../components/SearchInput";

export const Home = (props) => {
  return (
    <div className={classes.container}>
      <img src={wallpaper} alt="background" />
      <div className={classes.search}>
        <div className={classes.input}>
          <SearchInput type="text" placeholder="From" />
          <SearchInput type="text" placeholder="To" />
          <SearchInput type="date" placeholder="date" />
        </div>
        <div className={classes.submit}>
          <button className={classes.btn}>
            <Link to="/available-bus" className={classes.link}>
              Search
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
