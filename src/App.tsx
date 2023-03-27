import React from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { FormContextProvider } from "./Context/FormContext";

function App() {
  //test data

  return (
    <FormContextProvider>
      <div className="flex p-2 xs:block">
        <MainPage></MainPage>
        <PreviewPage></PreviewPage>
      </div>
    </FormContextProvider>
  );
}

export default App;
