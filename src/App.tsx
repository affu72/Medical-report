import Pages from "./components/Pages";
import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { IFormData } from "./components/MainComponent/PersonaDetails";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    age: 0,
    mobile: "",
    gender: "",
    state: "",
  });

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

  interface IMedicalRecord {
    label: string;
    value: string;
  }
  const [history, setHistory] = useState<IMedicalRecord[] | null>(null);

  return (
    <div className="flex p-2 xs:block">
      <MainPage
        getPersonalData={inputChangeHandler}
        data={formData}
        getRecord={(data: IMedicalRecord[]) => setHistory(data)}
      ></MainPage>
      <PreviewPage personalData={formData}></PreviewPage>
    </div>
  );
}

export default App;
