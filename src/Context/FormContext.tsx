import React, { createContext, useContext, useState } from "react";

import { IPersonalData } from "../components/MainComponent/PersonaDetails";

import IOption from "../ts/interfaces/Option";

export interface IMedicalRecordPreview {
  histories: IOption[];
  symptoms: IOption[];
}

export interface IMedicalRecord extends IMedicalRecordPreview {
  inputSymptoms: string;
  inputMedicalHistory: string;
}
interface IFormContext {
  personalData: IPersonalData;
  setPersonalData: (data: IPersonalData) => void;
  inputMedicalHistory: string;
  setInputMedicalHistory: (inputHistory: string) => void;
  medicalHistories: IOption[];
  setMedicalHistories: (history: IOption[]) => void;
  inputSymptoms: string;
  setInputSymptoms: (inputSymptom: string) => void;
  symptoms: IOption[];
  setSymptoms: (symptom: IOption[]) => void;
  handleKeySymptoms: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputPersonalDetailsHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const FormContext = createContext<IFormContext | null>(null);

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //Personal Information

  const [personalData, setPersonalData] = useState<IPersonalData>({
    firstName: "",
    lastName: "",
    age: 0,
    mobile: "",
    gender: "",
    address: "",
    city: "",
    pin: 0,
    state: "",
  });

  const inputPersonalDetailsHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const value = target.type === "radio" ? target.id : target.value;
    const name = target.name;

    setPersonalData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //MedicalRecord state handling

  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const [inputMedicalHistory, setInputMedicalHistory] = React.useState("");

  const [medicalHistories, setMedicalHistories] = React.useState<IOption[]>([]);

  const [inputSymptoms, setInputSymptoms] = React.useState("");

  const [symptoms, setSymptoms] = React.useState<IOption[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputMedicalHistory) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setMedicalHistories((prev) => [
          ...prev,
          createOption(inputMedicalHistory),
        ]);
        setInputMedicalHistory("");
        event.preventDefault();
    }
  };

  const handleKeySymptoms = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputSymptoms) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setSymptoms((prev) => [...prev, createOption(inputSymptoms)]);
        setInputSymptoms("");
        event.preventDefault();
    }
  };

  const value: IFormContext = {
    personalData,
    setPersonalData,
    inputMedicalHistory,
    setInputMedicalHistory,
    medicalHistories,
    setMedicalHistories,
    inputSymptoms,
    setInputSymptoms,
    symptoms,
    setSymptoms,
    handleKeyDown,
    handleKeySymptoms,
    inputPersonalDetailsHandler,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext) as IFormContext;
  if (!context)
    throw new Error(
      "useFormContext must be used within FormContextProvider component"
    );

  return context;
};

export default FormContext;
