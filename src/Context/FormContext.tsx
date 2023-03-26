import { createContext } from "react";
import { IFormData } from "../components/MainComponent/PersonaDetails";

const FormContext = createContext<IFormData>({
  firstName: "",
  lastName: "",
  age: 0,
  mobile: "",
  gender: "",
  state: "",
});

export default FormContext;
