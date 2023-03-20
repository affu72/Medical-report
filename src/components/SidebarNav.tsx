import React from "react";

function SidebarNav() {
  return (
    <div className="flex flex-col bg-slate-100 p-8 gap-10 items-baseline basis-1/3 drop-shadow-md font-thin box-border">
      <button className="hover:font-semibold hover:scale-105 hover:border-l-4 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        Personal Information
      </button>
      <button className="hover:font-bold hover:scale-105 hover:border-l-4 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        Medical history
      </button>
      <button className="hover:font-bold hover:scale-105 hover:border-l-4 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        Medicines
      </button>
      <button className="hover:font-bold hover:scale-105 hover:border-l-4 border-b-2 border-cyan-500 transition-all duration-100 pl-1">
        fee
      </button>
    </div>
  );
}

export default SidebarNav;
