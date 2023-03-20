import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaBookMedical, FaPrescription, FaMoneyBillAlt } from "react-icons/fa";

function SidebarNav() {
  return (
    <div className="flex flex-col bg-slate-100 pl-2 p-6 gap-10 items-baseline basis-1/3 drop-shadow-md font-thin box-border">
      <button className="flex items-center gap-4 hover:font-semibold hover:scale-105 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        <IoIosPersonAdd /> Personal Information
      </button>
      <button className="flex gap-4 items-center hover:font-bold hover:scale-105 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        <FaBookMedical />
        Medical history
      </button>
      <button className="flex gap-4 items-center hover:font-bold hover:scale-105 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        <FaPrescription />
        Medicines
      </button>
      <button className="flex gap-4 items-center hover:font-bold hover:scale-105 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        <FaMoneyBillAlt></FaMoneyBillAlt>Medical Bill
      </button>
    </div>
  );
}

export default SidebarNav;
