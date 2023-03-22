import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaBookMedical, FaPrescription, FaMoneyBillAlt } from "react-icons/fa";

interface SidebarProp {
  onNavClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SideNav(props: SidebarProp) {
  enum sideButtons {
    personal,
    history,
    medicines,
    bill,
  }

  console.log("rendere");

  return (
    <div className="flex flex-col bg-slate-100 pl-2 py-10 gap-10 items-baseline basis-1/3 drop-shadow-md font-thin box-border">
      <button
        value={sideButtons.personal}
        onClick={props.onNavClick}
        className="w-full flex items-center gap-4 hover:font-semibold focus:font-semibold  border-b-2 border-cyan-500 transition-all duration-100 focus:bg-blue-100 hover:bg-blue-100 py-4 focus:translate-x-1"
      >
        <IoIosPersonAdd /> Personal Information
      </button>

      <button
        value={sideButtons.history}
        onClick={props.onNavClick}
        className="w-full flex gap-4 items-center hover:font-semibold focus:font-semibold  border-b-2 border-cyan-500 transition-all duration-100 focus:bg-blue-100 hover:bg-blue-100 py-4 focus:translate-x-1"
      >
        <FaBookMedical />
        Medical history
      </button>
      <button
        value={sideButtons.medicines}
        onClick={props.onNavClick}
        className="w-full flex gap-4 items-center hover:font-semibold focus:font-semibold  border-b-2 border-cyan-500 transition-all duration-100 focus:bg-blue-100 hover:bg-blue-100 py-4 focus:translate-x-1"
      >
        <FaPrescription />
        Medicines
      </button>
      <button
        value={sideButtons.bill}
        onClick={props.onNavClick}
        className="w-full flex gap-4 items-center hover:font-semibold focus:font-semibold  border-b-2 border-cyan-500 transition-all duration-100 focus:bg-blue-100 hover:bg-blue-100 py-4 focus:translate-x-1"
      >
        <FaMoneyBillAlt />
        Medical Bill
      </button>
    </div>
  );
}

export default SideNav;
