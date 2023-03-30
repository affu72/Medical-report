import React from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import {
  MyFormContextProvider,
  useMyFormContext,
} from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";

function App() {
  const { hasDoctorData } = useMyFormContext();
  return (
    <div>
      {!hasDoctorData ? (
        <DoctorDetails />
      ) : (
        <div className="flex p-2 justify-evenly xs:block m-auto md:flex-col">
          <MainPage></MainPage>
          <PreviewPage></PreviewPage>
        </div>
      )}
    </div>
  );
}

export default App;
