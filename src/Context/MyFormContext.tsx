import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { IDoctorDetails } from "../components/DoctorDetails";
import { IFormData } from "../components/MainComponent/InputForms";
import { formDataArr } from "../ts/Contants";
//context value type
interface IFormContext {
  showFormHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
  tabClickHandler: () => void;
  handleBackClick: () => void;
  onNavClick?: () => void;
  handleDoctorForm: (data: IDoctorDetails) => void;
  doctorData: IDoctorDetails;
  hasDoctorData: boolean;
  setDoctorData: (data: IDoctorDetails) => void;
  setHasDoctorData: (value: boolean) => void;
  patientDataHandler: (data: IFormData) => void;
  patientData: IFormData[] | null;
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}

// creatig conetxt

const MyFormContext = createContext<IFormContext | null>(null);

//context provider
export const MyFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [patientData, setPatientData] = useState<IFormData[]>([]);
  //deoctor's details
  const [doctorData, setDoctorData] = useState<IDoctorDetails>({
    clinicName: "",
    doctorName: "",
    clinicAddress: "",
    doctorPhoneNumber: 0,
    regNumber: "",
    qualification: "",
    logo: "",
    openingTime: "",
    closingTime: "",
    closingDay: "",
  });

  const [hasDoctorData, setHasDoctorData] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = useMemo(() => {
    //Doctors Details
    const handleDoctorForm = (data: IDoctorDetails) => {
      localStorage.setItem("doctorData", JSON.stringify(data));
      setHasDoctorData(true);
    };

    const patientDataHandler = (data: IFormData) => {
      setPatientData((prev) => [...prev, data]);
    };

    const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      setTabIndex(+event.currentTarget.value);
    };

    const tabClickHandler = () => setTabIndex((prev) => prev + 1);

    const handleBackClick = () => setTabIndex((prev) => prev - 1);

    const value: IFormContext = {
      showFormHandler,
      tabIndex,
      setTabIndex,
      tabClickHandler,
      handleBackClick,
      handleDoctorForm,
      doctorData,
      hasDoctorData,
      setDoctorData,
      setHasDoctorData,
      patientDataHandler,
      patientData,
      isOpen,
      setIsOpen,
    };

    return value;
  }, [tabIndex, doctorData, hasDoctorData, patientData, isOpen]);

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
