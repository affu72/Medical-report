import SideNav from "./SideNav";
import InputForms from "./InputForms";

function MainPage() {
  return (
    <div className="w-full flex gap-4 bg-slate-100 p-4 xl:flex-col relative xs:w-full md:w-full md:flex-row">
      <SideNav />
      <InputForms></InputForms>
    </div>
  );
}

export default MainPage;
