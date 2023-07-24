import React from "react";
import wallpaper from "../assets/bus.jpg";
import classes from "./styles/Home.module.css";
import { SearchInput } from "../components/SearchInput";

export const Home = (props) => {
  return (
    <div className={classes.container}>
      <img src={wallpaper} alt="background" />
      <div className={classes.search}>
        <div className={classes.input}>
          <SearchInput />
        </div>
        <div className={classes.submit}>
          <button className={classes.btn}>Search</button>
        </div>
      </div>
    </div>
  );
};
