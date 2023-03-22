import { FormEvent, useState } from "react";
import PreviewPage from "./PreveiwComponent/PreviewPage";
import MainPage from "./MainComponent//MainPage";

function Pages() {
  // const [inputs, setInputs] = useState<InterfaceInputs>({
  //   name: "",
  //   age: 0,
  //   symptoms: "",
  // });
  // const [preview, setPreview] = useState("");

  // const handleInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   setInputs((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const generateReport = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setPreview("This is a sample medical report.");
  // };

  return (
    <div className="flex justify-center p-6 gap-x-4">
      <MainPage></MainPage>
      <PreviewPage></PreviewPage>
    </div>
  );
}

export default Pages;
