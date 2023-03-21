import { FormEvent, useState } from "react";
import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { InterfaceInputs } from "../Modal/Interfaces";

function MainPage() {
  type SideBarTuples = [boolean, boolean, boolean, boolean];

  const sideBarTuples: SideBarTuples = [true, false, false, false];

  const [showForm, setShowForm] = useState<SideBarTuples>(sideBarTuples);

  const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowForm((prev) => {
      const list = prev;

      for (let i = 0; i < list.length; i++) list[i] = false;

      list[+event.currentTarget.value] = true;

      return list;
    });
  };

  return (
    <div className="w-1/2 flex gap-4 bg-slate-100 p-4">
      <SideNav onNavClick={showFormHandler} />
      <InputForms
        // inputs={inputs}
        // handleInputChange={handleInputChange}
        // generateReport={generateReport}
        inputs={showForm}
      ></InputForms>
    </div>
  );
}

export default MainPage;
