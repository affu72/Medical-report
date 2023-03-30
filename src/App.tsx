import React from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { MyFormContextProvider } from "./Context/MyFormContext";
import SideNav from "./components/MainComponent/SideNav";
import InputForms from "./components/MainComponent/InputForms";
import DoctorDetails from "./components/PreveiwComponent/DoctorDetails";

function App() {
  //test data
  return (
    <MyFormContextProvider>
      <div>
        {localStorage.getItem("doctorData") === null ? (
          <DoctorDetails />
        ) : (
          <div className="flex p-2 justify-evenly xs:block m-auto md:flex-col">
            <MainPage></MainPage>
            <PreviewPage></PreviewPage>
          </div>
        )}
      </div>
    </MyFormContextProvider>
  );
}

export default App;
