import React from "react";
import Button from "../../components/Layout/Button";
import classes from "./Login.module.css";

export const Login = () => {
  return (
    <div className={classes.container}>
      <form>
        <h4 className={classes.title}>Login Page</h4>
        <div>
          <input type="email" placeholder="Enter Your Email" required />
        </div>
        <div>
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <div className={classes.btn}>
          <Button>Login</Button>
          <Button>Forgot Password</Button>
        </div>
      </form>
    </div>
  );
};