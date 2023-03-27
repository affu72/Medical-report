import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { IFormData } from "./components/MainComponent/PersonaDetails";
import { KeyboardEventHandler, useState } from "react";
import FormContext from "./Context/FormContext";
import React from "react";
import IOption from "./ts/interfaces/Option";

function App() {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    age: 0,
    mobile: "",
    gender: "",
    state: "",
    pin: 0,
    city: "",
    address: "",
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

  //MedicalRecord state handling

  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const [inputMedicalHistory, setInputMedicalHistory] = React.useState("");

  const [medicalHistory, setMedicalHistory] = React.useState<IOption[]>([]);

  const [inputSymptoms, setInputSymptoms] = React.useState("");

  const [symptoms, setSymptoms] = React.useState<IOption[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputMedicalHistory) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setMedicalHistory((prev) => [
          ...prev,
          createOption(inputMedicalHistory),
        ]);
        setInputMedicalHistory("");
        event.preventDefault();
    }
  };

  const handleKeySymptoms: KeyboardEventHandler = (event) => {
    if (!inputSymptoms) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setSymptoms((prev) => [...prev, createOption(inputSymptoms)]);
        setInputSymptoms("");
        event.preventDefault();
    }
  };

  const inputHandlers = {
    handleKeyDown,
    handleKeySymptoms,
    setInputMedicalHistory,
    setMedicalHistory,
    setInputSymptoms,
    setSymptoms,
  };

  //test data

  return (
    <FormContext.Provider
      value={{
        personalData: formData,
        medicalRecord: {
          histories: medicalHistory,
          symptoms,
          inputMedicalHistory,
          inputSymptoms,
        },
        inputHandlers,
      }}
    >
      <div className="flex p-2 xs:block">
        <MainPage getPersonalData={inputChangeHandler}></MainPage>
        <PreviewPage
          medicalRecord={{ histories: medicalHistory, symptoms }}
        ></PreviewPage>
      </div>
    </FormContext.Provider>
  );
}

export default App;
