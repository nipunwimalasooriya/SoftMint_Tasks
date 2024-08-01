import React from "react";
import fblogo from "../images/fblogo.png";
import proImg from "../images/profileImg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTv,
  faUsers,
  faStore,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={fblogo} alt="Logo" className="h-8 w-8" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search Facebook"
              className="p-2  rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex  space-x-32">
          <button className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTv} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faUsers} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faStore} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGamepad} />
          </button>
        </div>

        {/* Right Side: Notifications and Profile */}
        <div className="flex items-center space-x-2">
          <img src={proImg} alt="Profile" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
