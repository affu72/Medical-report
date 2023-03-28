import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { useMyFormContext } from "../../Context/MyFormContext";

type PropMainApp = {
  getPersonalData?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

function MainPage({ getPersonalData }: PropMainApp) {
  const { tabClickHandler, tabIndex, showFormHandler } = useMyFormContext();

  return (
    <div className="w-1/2 flex gap-4 bg-slate-100 p-4  xl:flex-col overflow-hidden relative xs:w-full md:w-full md:flex-row">
      <SideNav onNavClick={showFormHandler} tabIndex={tabIndex} />
      <InputForms tabIndex={tabIndex}></InputForms>
    </div>
  );
}

export default MainPage;
