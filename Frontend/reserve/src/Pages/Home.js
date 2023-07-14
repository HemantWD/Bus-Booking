import React from "react";
import wallpaper from "../assets/bus.jpg";
import classes from "./Home.module.css";
import { SearchInput } from "../components/SearchInput";
import Button from "../components/Layout/Button";

export const Home = (props) => {
  return (
    <div className={classes.container}>
      <img src={wallpaper} alt="background" />
      <div className={classes.search}>
        <div className={classes.input}>
          <SearchInput />
        </div>
        <div className={classes.submit}>
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};
