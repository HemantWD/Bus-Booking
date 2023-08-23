import React, { useState } from "react";
import classes from "./Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, phone, address);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        { name, email, password, phone, address }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <h4 className={classes.title}>Register Page</h4>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Enter Phone Number"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className={classes.btn}>
          <button type="submit">Register</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};
