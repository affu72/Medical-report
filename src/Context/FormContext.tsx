import { createContext } from "react";
import { IFormData } from "../components/MainComponent/PersonaDetails";
import IOption from "../ts/interfaces/Option";

export interface IMedicalRecordPreview {
  histories: IOption[];
  symptoms: IOption[];
}

export interface IMedicalRecord extends IMedicalRecordPreview {
  inputSymptoms: string;
  inputMedicalHistory: string;
}
interface IContext {
  personalData: IFormData;
  medicalRecord: IMedicalRecord;
  callBacks: any;
  // medicines?: IMedicine;
}

// const PersonalDetails = createContext<IFormData>({
//   firstName: "",
//   lastName: "",
//   age: 0,
//   mobile: "",
//   gender: "",
//   state: "",
// });

const FormContext = createContext<IContext | null>(null);

// export default PersonalDetails;
export default FormContext;
