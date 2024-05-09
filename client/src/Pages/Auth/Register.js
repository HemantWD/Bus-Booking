import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

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
    <Layout>
      <div className="flex items-center justify-center h-screen flex-col bg-orange-100 bg-gradient-to-r from-orange-200 to-orange-900">
        <form
          className="shadow-lg rounded-lg shadow-zinc-900 p-5 w-2/4 bg-white"
          onSubmit={handleSubmit}
        >
          <h4 className=" text-center text-3xl font-bold mb-4">
            Register Page
          </h4>
          <input
            type="text"
            value={name}
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your Name"
            required
          />

          <input
            type="email"
            value={email}
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            value={password}
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Your Password"
            required
          />
          <input
            type="number"
            value={phone}
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Enter Phone Number"
            required
          />
          <input
            type="text"
            value={address}
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter Your Address"
            required
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500 w-2/5"
            >
              Register
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </Layout>
  );
};
