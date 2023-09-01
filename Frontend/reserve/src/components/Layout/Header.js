import React from "react";
import { useNavigate } from "react-router-dom";
import { BsBusFront } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setUserAndToken } from "../../redux/authSlice";

export const Header = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserAndToken({ user: null, token: "" }));
    localStorage.removeItem("authData");
  };

  const handleOnclick = () => {
    navigate("/login");
  };
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <nav className="mt-2 flex h-14 justify-between content-center py-0 px-10 mr-auto text-orange-500 text-xl font-bold ">
      <ul className="p-2 flex content-center list-none ">
        <BsBusFront />
        <a className="mx-2.5" href="/">
          Reserve
        </a>
        <li className="mr-2.5">
          <a className="mx-2.5" href="/">
            Ticket
          </a>
        </li>
        <li className="mr-2.5">
          <a className="mx-2.5" href="/">
            Contact Us
          </a>
        </li>
      </ul>
      <ul>
        {!auth.user ? (
          <>
            <button
              className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500"
              onClick={handleClick}
            >
              Register
            </button>
            <button
              className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-2 hover:bg-indigo-500 duration-500"
              onClick={handleOnclick}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <button
              className="rounded text-white bg-orange-600 font-bold py-2 px-6 ml-px-2 hover:bg-indigo-500 duration-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};
