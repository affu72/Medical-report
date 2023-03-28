import React from "react";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { MyFormContextProvider } from "./Context/MyFormContext";
import PDFFile from "./pdf/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  //test data

  return (
    <MyFormContextProvider>
      <div className="flex p-2 xs:block">
        <MainPage></MainPage>
        <PreviewPage></PreviewPage>
      </div>
    </MyFormContextProvider>
  );
}

export default App;
