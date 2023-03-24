import Pages from "./components/Pages";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { IFormData } from "./components/MainComponent/PersonaDetails";
import { useState } from "react";

function App() {
  const [data, setData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    age: 0,
    mobile: "",
    gender: "",
    state: "",
  });

  const handlePersonalData = (d: IFormData) => {
    setData({ ...d });
  };
  console.log("app", data);
  return (
    <div className="flex p-2 xs:block">
      <MainPage getPersonalData={handlePersonalData}></MainPage>
      <PreviewPage></PreviewPage>
    </div>
  );
}

export default App;
