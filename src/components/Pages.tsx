import { useState } from "react";
import InputPage from "./InputPage";
import { InterfaceInputs } from "../Modal/Interfaces";

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
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const generateReport = () => {
    // Write code to generate medical report based on inputs
    // Set the generated report to preview state
    setPreview("This is a sample medical report.");
  };

  return (
    <div className="flex justify-center p-10 gap-x-5">
      <InputPage
        inputs={inputs}
        handleInputChange={handleInputChange}
        generateReport={generateReport}
      ></InputPage>
      <div className="w-1/2 ml-8">
        <h2 className="text-2xl font-medium mb-4 text-center">Preview</h2>
        <div className="bg-gray-100 rounded-md p-4">{preview}</div>
      </div>
    </div>
  );
}

export default Pages;
