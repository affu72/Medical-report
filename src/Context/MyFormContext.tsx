import React, {
  ChangeEvent,
  createContext,
  useContext,
  useState,
  KeyboardEvent,
  ReactNode,
  useMemo,
} from "react";
import { IPersonalData } from "../components/MainComponent/PersonaDetails";
import IOption from "../ts/interfaces/Option";
import { IMedicine } from "../components/MainComponent/Medicines";
import { IMedicalBill } from "../components/MainComponent/MedicalBill";

//context value type
interface IFormContext {
  personalData: IPersonalData;
  inputMedicalHistory: string;
  setInputMedicalHistory: (inputHistory: string) => void;
  medicalHistories: IOption[];
  setMedicalHistories: (history: IOption[]) => void;
  inputSymptoms: string;
  setInputSymptoms: (inputSymptom: string) => void;
  symptoms: IOption[];
  setSymptoms: (symptom: IOption[]) => void;
  handleKeySymptoms: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputPersonalDetailsHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  medicines: IMedicine[];
  setMedicines: (medicines: IMedicine[]) => void;
  addMedicine: () => void;
  medicineInputChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => void;
  removeMedicineHandler: (index: number) => void;
  clearMedicineHandler: () => void;
  bills: IMedicalBill[];
  setBills: (newBills: IMedicalBill[]) => void;
  handleAddBill: () => void;
  showFormHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
  tabClickHandler: () => void;
}

// creatig conetxt

const MyFormContext = createContext<IFormContext | null>(null);

//context provider
export const MyFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  //Persnal details
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

  //medical record
  const [inputMedicalHistory, setInputMedicalHistory] = useState("");

  const [medicalHistories, setMedicalHistories] = useState<IOption[]>([]);

  const [inputSymptoms, setInputSymptoms] = useState("");

  const [symptoms, setSymptoms] = useState<IOption[]>([]);

  //medicines
  const [medicines, setMedicines] = useState<IMedicine[]>([
    { name: "", dose: "", type: "", id: 0 },
  ]);

  //medical bills
  const [bills, setBills] = useState<IMedicalBill[]>([
    { billName: "", billValue: "", id: 0 },
  ]);

  const [tabIndex, setTabIndex] = useState(0);

  //useMemo

  const value = useMemo(() => {
    //personal information
    const inputPersonalDetailsHandler = (
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

    const handleKeySymptoms = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
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
    const addMedicine = () => {
      if (
        medicines[medicines.length - 1].name === "" ||
        medicines[medicines.length - 1].dose === "" ||
        medicines[medicines.length - 1].type === ""
      ) {
        alert("Medicines field is empty");
        return;
      }

      setMedicines((prev) => {
        return [
          ...prev,
          {
            name: "",
            dose: "",
            type: "",
            id: prev[prev.length - 1]["id"] + 1,
          },
        ];
      });
    };

    const medicineInputChangeHandler = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
    const handleAddBill = () => {
      if (
        bills[bills.length - 1].billName === "" ||
        bills[bills.length - 1].billValue === ""
      ) {
        alert("Bill field is empty");
        return;
      }

      setBills((prev) => [
        ...prev,
        { billName: "", billValue: "", id: prev[prev.length - 1]["id"] + 1 },
      ]);
    };

    const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      setTabIndex(+event.currentTarget.value);
    };

    const tabClickHandler = () => setTabIndex((prev) => prev + 1);

    const value: IFormContext = {
      personalData,
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
      showFormHandler,
      tabIndex,
      setTabIndex,
      tabClickHandler,
    };

    return value;
  }, [
    personalData,
    inputMedicalHistory,
    setInputMedicalHistory,
    medicalHistories,
    setMedicalHistories,
    inputSymptoms,
    setInputSymptoms,
    symptoms,
    setSymptoms,
    medicines,
    setMedicines,
    bills,
    setBills,
    tabIndex,
  ]);
  return (
    <MyFormContext.Provider value={value}>{children}</MyFormContext.Provider>
  );
};

export const useMyFormContext = () => {
  const context = useContext(MyFormContext) as IFormContext;
  if (!context)
    throw new Error(
      "useMyFormContext must be used within MyFormContextProvider component"
    );

  return context;
};

export default MyFormContext;
