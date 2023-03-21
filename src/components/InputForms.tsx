import React, { FormEvent } from "react";
import { InterfaceInputs } from "../Modal/Interfaces";
import Input from "./MyComponents/Input";
import PersonalInformation from "./PersonalInformation";

// interface IProp {
//   inputs: InterfaceInputs;
//   handleInputChange: (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   generateReport: (event: FormEvent<HTMLFormElement>) => void;
// }

function InputForms() {
  // type SideBarTuples = [boolean, boolean, boolean, boolean];

  // const sideBarTuples: SideBarTuples = [true, false, false, false];

  // const [showForm, setShowForm] = useState<SideBarTuples>(sideBarTuples);

  // const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setShowForm((prev) => {
  //     const list = prev;

  //     for (let i = 0; i < list.length; i++) list[i] = false;

  //     list[+event.currentTarget.value] = true;

  //     return list;
  //   });
  // };

  return (
    <form className="bg-white flex flex-col gap-6 p-10 basis-2/3">
      <PersonalInformation></PersonalInformation>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Preview
      </button>
    </form>
  );
}

export default InputForms;

/* <div className="w-full mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="symptoms"
        >
          Symptoms
        </label>
        <textarea
          className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
          name="symptoms"
          id="symptoms"
          value={props.inputs.symptoms}
          onChange={props.handleInputChange}
        ></textarea>
      </div> */
