import React, { useEffect, useRef } from "react";
import { useMyFormContext } from "../Context/MyFormContext";
import InputRHF from "./CustomComp/InputRHF";
import { getInputClassName } from "../ts/Contants";

const SideBar = () => {
  const { showNavbar, setShowNavbar } = useMyFormContext();

  const navStyle = `${showNavbar ? "" : "-translate-x-[208px]"}`;

  return (
    <div
      className={`h-screen px-4 py-8 min-w-[208px] fixed top-0 left-0 bg-gray-100 ${navStyle} transition-transform duration-500 backdrop-opacity-0 box-border`}
    >
      <button type="button" onClick={() => setShowNavbar(!showNavbar)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-12 h-12 self-center ml-4 absolute -right-16 top-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <input
        autoFocus={true}
        type="text"
        className="rounded-2xl py-2 border-2 border-gray-500 box-border text-center"
        placeholder="Search"
      />
    </div>
  );
};

export default SideBar;
