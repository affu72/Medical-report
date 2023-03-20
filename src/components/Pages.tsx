import {
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import InputPage from "./InputPage";
import { InterfaceInputs } from "../Modal/Interfaces";
import PreviewPage from "./PreviewPage";

function Pages() {
  const [inputs, setInputs] = useState<InterfaceInputs>({
    name: "",
    age: 0,
    symptoms: "",
  });
  const [preview, setPreview] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const generateReport = (event: FormEvent<HTMLFormElement>) => {
    // Write code to generate medical report based on inputs
    // Set the generated report to preview state
    event.preventDefault();
    setPreview("This is a sample medical report.");
  };

  return (
    <div className="flex justify-center p-10 gap-x-5">
      <InputPage
        inputs={inputs}
        handleInputChange={handleInputChange}
        generateReport={generateReport}
      ></InputPage>
      <PreviewPage preview={preview}></PreviewPage>
    </div>
  );
}

export default Pages;
