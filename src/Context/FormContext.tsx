import React, { createContext, useContext, useState } from "react";
import { IPersonalData } from "../components/MainComponent/PersonaDetails";
import IOption from "../ts/interfaces/Option";
import { IMedicine } from "../components/MainComponent/Medicines";
import { IMedicalBill } from "../components/MainComponent/MedicalBill";

//context value type
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
  medicines: IMedicine[];
  setMedicines: (medicines: IMedicine[]) => void;
  addMedicine: () => void;
  medicineInputChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => void;
  removeMedicineHandler: (index: number) => void;
  clearMedicineHandler: () => void;
  bills: IMedicalBill[];
  setBills: (newBills: IMedicalBill[]) => void;
  handleAddBill: () => void;
}

// creatig conetxt

const FormContext = createContext<IFormContext | null>(null);

//context provider
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

  //MedicalRecord

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

  //medicines

  const [medicines, setMedicines] = useState<IMedicine[]>([
    { name: "", dose: "", type: "", id: 0 },
  ]);

  const addMedicine = () => {
    setMedicines((prev) => [
      ...prev,
      { name: "", dose: "", type: "", id: prev[prev.length - 1]["id"] + 1 },
    ]);
  };

  const medicineInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const list = [...medicines];

    list[index][name as "name" | "dose" | "type"] = value;

    setMedicines(list);
  };

  const removeMedicineHandler = (index: number) => {
    setMedicines((prev) => prev.filter((medicine) => index !== medicine.id));
  };

  const clearMedicineHandler = () => {
    setMedicines([{ name: "", dose: "", type: "", id: 0 }]);
  };

  //Medical Bill

  const [bills, setBills] = useState<IMedicalBill[]>([
    { billName: "", billValue: "", id: 0 },
  ]);

  const handleAddBill = () => {
    setBills((prev) => [
      ...prev,
      { billName: "", billValue: "", id: prev[prev.length - 1]["id"] + 1 },
    ]);
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
    medicineInputChangeHandler,
    medicines,
    setMedicines,
    removeMedicineHandler,
    clearMedicineHandler,
    addMedicine,
    bills,
    setBills,
    handleAddBill,
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
