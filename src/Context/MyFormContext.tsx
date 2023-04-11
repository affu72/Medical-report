import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { IDoctorDetails } from "../components/DoctorDetails";
import { IFormData } from "../components/MainComponent/InputForms";
import { deafaultFormValue, formDataArr } from "../ts/Contants";
import { FormProvider, useForm } from "react-hook-form";
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
  isNavbarOpen: boolean;
  setIsNavbarOpen: (data: boolean) => void;
  deletePatientDataHandler: (event: any) => void;
  isFormOpen: boolean;
  setIsFormOpen: (st: boolean) => void;
  editFormHandler: (e: any) => void;
}

// creatig conetxt

const MyFormContext = createContext<IFormContext | null>(null);

//context provider
export const MyFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [patientData, setPatientData] = useState<IFormData[]>(formDataArr);

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

  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const [defaultValue, setDefaultvalue] = useState(deafaultFormValue);

  const methods = useForm<IFormData>({
    defaultValues: defaultValue,
    mode: "all",
    criteriaMode: "all",
  });

  const value = useMemo(() => {
    //Doctors Details
    const handleDoctorForm = (data: IDoctorDetails) => {
      localStorage.setItem("doctorData", JSON.stringify(data));
      setHasDoctorData(true);
    };

    const patientDataHandler = (data: IFormData) => {
      const prevData = patientData;

      const indx = prevData.findIndex((ele) => ele.id === data.id);

      if (indx !== -1) prevData.splice(indx, 1);

      setPatientData([...prevData, data]);
    };

    const deletePatientDataHandler = (event: any) => {
      const index = event.currentTarget.tabIndex;
      setPatientData((prev) => prev.filter((data, i) => i !== index));
    };

    const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      setTabIndex(+event.currentTarget.value);
    };

    const tabClickHandler = () => setTabIndex((prev) => prev + 1);

    const handleBackClick = () => setTabIndex((prev) => prev - 1);

    const editFormHandler = (e: any) => {
      const index = e.currentTarget.tabIndex;

      console.log(index, patientData[index]);

      setDefaultvalue(patientData[index]);

      setIsFormOpen(true);
      setIsNavbarOpen(false);
    };

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
      isNavbarOpen,
      setIsNavbarOpen,
      deletePatientDataHandler,
      isFormOpen,
      setIsFormOpen,
      editFormHandler,
    };

    return value;
  }, [
    tabIndex,
    doctorData,
    hasDoctorData,
    patientData,
    isNavbarOpen,
    isFormOpen,
  ]);

  return (
    <FormProvider {...methods}>
      <MyFormContext.Provider value={value}>{children}</MyFormContext.Provider>
    </FormProvider>
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
