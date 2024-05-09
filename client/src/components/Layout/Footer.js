import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        id="contact"
        className="bg-gray-500 relative p-5 flex h-auto justify-between"
      >
        <div className="w-2/5">
          <h4 className="font-serif text-lg font-bold mb-2.5">RESERVE</h4>
          <p>Where you have a choice. Choose Reserve</p>
          <p>
            Reserve offers bus tickets Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis.
          </p>
        </div>
        <div className="flex justify-between w-3/4">
          <div className="w-2/5">
            <h4 className="font-serif text-lg font-bold mb-2.5">About</h4>
            <ul>
              <li className="mb-1">About Us</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </div>
          <div className="column">
            <h4 className="font-serif text-lg font-bold mb-2.5">
              Useful Links
            </h4>
            <ul>
              <li className="mb-1">Careers</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">T & C</li>
              <li className="mb-1">Privacy Policy </li>
              <li className="mb-1">Blog</li>
            </ul>
          </div>
          <div className="column">
            <h4 className="font-serif text-lg font-bold mb-2.5">Follow Us</h4>
            <ul>
              <li className="mb-2">
                <BsFacebook />
              </li>
              <li className="mb-2">
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="text-center font-serif font-bold">
        &copy; All Right Reserved
      </div>
    </>
  );
};

export default Footer;
