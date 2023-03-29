import React from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { MyFormContextProvider } from "./Context/MyFormContext";
import SideNav from "./components/MainComponent/SideNav";
import InputForms from "./components/MainComponent/InputForms";

function App() {
  //test data

  return (
    <MyFormContextProvider>
      <div className="flex p-2 justify-evenly xs:block m-auto md:flex-col">
        <MainPage></MainPage>
        {/* 
        <div>
          <SideNav />
          <InputForms></InputForms>
        </div> */}

        <PreviewPage></PreviewPage>
      </div>
    </MyFormContextProvider>
  );
}

export default App;
