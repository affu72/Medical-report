import { FormEvent, useState } from "react";
import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { InterfaceInputs } from "../Modal/Interfaces";

function MainPage() {
  const showFormHandler = () => {
    console.log("shown");
  };
  return (
    <div className="w-1/2 flex gap-4 bg-slate-100 p-4">
      <SideNav onNavClick={showFormHandler} />
      <InputForms
      // inputs={inputs}
      // handleInputChange={handleInputChange}
      // generateReport={generateReport}
      // ontabClick =
      ></InputForms>
    </div>
  );
}

export default MainPage;
