import SideNav from "./SideNav";
import InputForms from "./InputForms";
import { useMyFormContext } from "../../Context/MyFormContext";

function MainPage() {
  const { isFormOpen } = useMyFormContext();

  return (
    <div
      className={`w-full flex gap-4 bg-slate-100 p-4 ${
        isFormOpen ? " xl:flex-col md:flex-row" : "flex-col"
      } xs:w-full md:w-full md:max-h-[450px] md:overflow-auto md:justify-between relative`}
    >
      {isFormOpen && <SideNav />}
      <InputForms></InputForms>
    </div>
  );
}

export default MainPage;
