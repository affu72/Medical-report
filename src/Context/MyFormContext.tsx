import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { IDoctorDetails } from "../components/DoctorDetails";
import { IFormData } from "../components/MainComponent/InputForms";
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
  patientData: IFormData | null;
}

// creatig conetxt

const MyFormContext = createContext<IFormContext | null>(null);

//context provider
export const MyFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [patientData, setPatientData] = useState<IFormData | null>(null);
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

  const value = useMemo(() => {
    //Doctors Details
    const handleDoctorForm = (data: IDoctorDetails) => {
      localStorage.setItem("doctorData", JSON.stringify(data));
      console.log("doctors data");
      setHasDoctorData(true);
    };

    const patientDataHandler = (data: IFormData) => {
      setPatientData(data);
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
    };

    return value;
  }, [tabIndex, doctorData, hasDoctorData, patientData]);
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
