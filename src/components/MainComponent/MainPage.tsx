import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { useMyFormContext } from "../../Context/MyFormContext";

function MainPage() {
  const { isFormOpen } = useMyFormContext();

  return (
    <div className="w-full flex gap-4 bg-slate-100 p-4 xl:flex-col xs:w-full md:w-full md:flex-row md:max-h-[400px] md:overflow-auto md:justify-between relative">
      {isFormOpen && <SideNav />}
      <InputForms></InputForms>
    </div>
  );
}

export default MainPage;
