import React, { useState } from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { useMyFormContext } from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const { hasDoctorData, showNavbar } = useMyFormContext();

  return (
    <div>
      {!hasDoctorData && !localStorage.getItem("doctorData") ? (
        <DoctorDetails />
      ) : (
        <div className={`flex justify-evenly xs:block m-auto md:flex-col`}>
          <Header></Header>
          <SideBar />
          {/* <MainPage></MainPage>
          <PreviewPage></PreviewPage> */}
        </div>
      )}
    </div>
  );
}

export default App;
