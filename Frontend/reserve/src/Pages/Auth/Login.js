import React from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import classes from "./Login.module.css";

export const Login = (e) => {
  const handleSubmit = () => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <Header />
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <h4 className={classes.title}>Login Page</h4>
          <div>
            <input type="email" placeholder="Enter Your Email" required />
          </div>
          <div>
            <input type="password" placeholder="Enter Your Password" required />
          </div>
          <div className={classes.btn}>
            <button>Login</button>
            <button>Forgot Password</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
