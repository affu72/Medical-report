import React from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { useMyFormContext } from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";

function App() {
  const { hasDoctorData } = useMyFormContext();

  return (
    <div>
      {!hasDoctorData && !localStorage.getItem("doctorData") ? (
        <DoctorDetails />
      ) : (
        <div className="flex justify-evenly xs:block m-auto md:flex-col">
          <MainPage></MainPage>
          <PreviewPage></PreviewPage>
        </div>
      )}
    </div>
  );
}

export default App;
