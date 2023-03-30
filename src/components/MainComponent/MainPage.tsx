import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { useMyFormContext } from "../../Context/MyFormContext";
import FormError from "../CustomComp/FormError";

function MainPage() {
  return (
    <div className="w-full flex gap-4 bg-slate-100 p-4 xl:flex-col xs:w-full md:w-full md:flex-row md:max-h-[400px] md:overflow-auto md:justify-between relative">
      <SideNav />
      <InputForms></InputForms>
    </div>
  );
}

export default MainPage;
