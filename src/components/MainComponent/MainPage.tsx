import { useState } from "react";
import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { useMyFormContext } from "../../Context/MyFormContext";

type PropMainApp = {
  getPersonalData?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

function MainPage({ getPersonalData }: PropMainApp) {
  const { tabClickHandler, setTabIndex, tabIndex, showFormHandler } =
    useMyFormContext();

  return (
    <div className="w-1/2 flex gap-4 bg-slate-100 p-4  xl:flex-col overflow-hidden relative xs:w-full">
      <SideNav onNavClick={showFormHandler} tabIndex={tabIndex} />
      <InputForms tabIndex={tabIndex}></InputForms>

      {tabIndex < 3 && (
        <button
          type="button"
          value="Save & Next"
          tabIndex={tabIndex}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-8 right-8`}
          onClick={tabClickHandler}
        >
          Save & Next
        </button>
      )}
    </div>
  );
}

export default MainPage;
