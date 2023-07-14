import React from "react";
import classes from "./css/Search.module.css";

export const SearchInput = (props) => {
  return (
    <div className={classes.searchInput}>
      <input type="text" placeholder="From" />
      <input type="text" placeholder="To" />
      <input type="date" placeholder="Date" />
    </div>
  );
};
