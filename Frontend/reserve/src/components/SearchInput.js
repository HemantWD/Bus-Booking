import React from "react";
import classes from "./css/Search.module.css";

export const SearchInput = (props) => {
  const { type, placeholder } = props;
  return (
    <div className={classes.searchInput}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
