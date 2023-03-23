import { useState } from "react";
import SideNav from "./SideNav";
import InputForms from "./InputForms";
function MainPage() {
  const [tabIndex, settabIndex] = useState(0);

  const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    settabIndex(+event.currentTarget.value);
  };

  return (
    <div className="w-1/2 flex gap-4 bg-slate-100 p-4  xl:flex-col overflow-hidden">
      <SideNav onNavClick={showFormHandler} tabIndex={tabIndex} />
      <InputForms tabIndex={tabIndex}></InputForms>
    </div>
  );
}

export default MainPage;
