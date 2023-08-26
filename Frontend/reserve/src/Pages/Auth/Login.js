import React, { useState } from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const Login = (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        { email, password }
      );
      if (response && response.data.success) {
        toast.success(response.data && response.data.message);
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  return (
    <>
      <Header />
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <h4 className={classes.title}>Login Page</h4>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={classes.btn}>
            <button type="submit">Login</button>
            <button>Forgot Password</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
