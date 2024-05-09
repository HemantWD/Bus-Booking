import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBusFront } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/authSlice";
import { toast } from "react-toastify";

export const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authData");
    toast.success("Logged out successfully");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-between h-16 p-4 bg-gray-200 ">
      <div className="flex items-center space-x-4">
        <BsBusFront className="text-2xl" />
        <Link to="/" className="text-lg text-orange-500 font-bold">
          Reserve
        </Link>
        <Link to="/" className="text-lg text-orange-500">
          Ticket
        </Link>
        <Link to="#contact" className="text-lg text-orange-500">
          Contact Us
        </Link>
      </div>
      <div>
        {auth.isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="rounded bg-orange-600 text-white py-2 px-4 hover:bg-orange-700"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={handleRegisterClick}
              className="rounded bg-orange-600 text-white py-2 px-4 mr-4 hover:bg-orange-700"
            >
              Register
            </button>
            <button
              onClick={handleLoginClick}
              className="rounded bg-orange-600 text-white py-2 px-4 hover:bg-orange-700"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};
