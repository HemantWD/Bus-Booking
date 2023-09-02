import React, { useState } from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
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
      <div className=" flex items-center justify-center h-96 flex-col bg-orange-100 bg-gradient-to-r from-orange-200 to-orange-900">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg shadow-zinc-900 p-5 w-2/4 bg-white"
        >
          <h4 className=" text-center text-3xl font-bold mb-4">Login Page</h4>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="mt-1 block px-3 py-2 border border-slate-300 rounded-md shadow-sm w-full text-2xl focus:outline-none focus:border-sky-500 focus:ring- focus:ring-sky-500 "
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500 w-2/5"
            >
              Login
            </button>
            <button className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500 w-2/5">
              Forgot Password
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
