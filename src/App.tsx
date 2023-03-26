import Pages from "./components/Pages";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { IFormData } from "./components/MainComponent/PersonaDetails";
import { useState } from "react";
import { IMedicalRecord } from "./ts/interfaces/MedicalRecord";
import FormContext from "./Context/FormContext";

function App() {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    age: 0,
    mobile: "",
    gender: "",
    state: "",
  });

  //Personal Information
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const value = target.type === "radio" ? target.id : target.value;
    const name = target.name;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [history, setHistory] = useState<IMedicalRecord[]>([
    { label: "", value: "" },
  ]);

  return (
    <FormContext.Provider value={formData}>
      <div className="flex p-2 xs:block">
        <MainPage
          getPersonalData={inputChangeHandler}
          data={formData}
          getRecord={(data: IMedicalRecord[]) => setHistory(data)}
        ></MainPage>
        <PreviewPage medicalRecord={history}></PreviewPage>
      </div>
    </FormContext.Provider>
  );
}

export default App;
