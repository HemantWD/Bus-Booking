import React from "react";
import wallpaper from "../assets/background.jpg";
import classes from "./Home.module.css";
import { SearchInput } from "../components/SearchInput";

export const Home = (props) => {
  return (
    <div>
      <img src={wallpaper} alt="image" />
      <div className={classes.search}>
        <div className={classes.from}>
          <SearchInput />
          <SearchInput />
        </div>
      </div>
    </div>
  );
};
