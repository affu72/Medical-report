import React, { FormEvent, useState } from "react";
import { InterfaceInputs } from "../Modal/Interfaces";
import SidebarNav from "./SidebarNav";

interface IProp {
  inputs: InterfaceInputs;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  generateReport: (event: FormEvent<HTMLFormElement>) => void;
}

function InputPage(props: IProp) {
  type SideBarTuples = [boolean, boolean, boolean, boolean];

  const sideBarTuples: SideBarTuples = [true, false, false, false];

  const [showForm, setShowForm] = useState<SideBarTuples>(sideBarTuples);

  const showFormHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);

    setShowForm((prev) => {
      const list = prev;

      list[+event.currentTarget.value] = true;

      return list;
    });
  };

  console.log(showForm);

  return (
    <div className="w-1/2 flex gap-4 bg-slate-100 p-4">
      {/* <h2 className="text-2xl text-center font-bold">Report</h2> */}

      <SidebarNav onNavClick={showFormHandler} />

      <form
        action=""
        className="bg-white flex flex-col gap-6 p-10 basis-2/3"
        onSubmit={props.generateReport}
      >
        <div className="w-full mb-4">
          <label htmlFor="name">First Name</label>

          <input
            className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
            type="text"
            name="first-name"
            id="name"
            value={props.inputs.name}
            onChange={props.handleInputChange}
            placeholder="first name"
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="">Last Name</label>
          <input
            className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
            type="text"
            name="last-name"
            id="name"
            value={props.inputs.name}
            onChange={props.handleInputChange}
            placeholder="Last name"
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="age">Patient Age</label>
          <input
            className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
            type="number"
            name="age"
            id="age"
            value={props.inputs.age}
            onChange={props.handleInputChange}
          />
        </div>

        <div className=" flex gap-16 items-center w-full mb-4">
          <label htmlFor="gender" className="m-0">
            Gender
          </label>

          <div className="flex gap-8">
            <div className="flex items-center gap-4 p-2">
              <label
                htmlFor="male"
                className="block font-medium text-gray-700 m-0"
              >
                Male
              </label>
              <input type="radio" name="gender" id="male" className="mt-0" />
            </div>

            <div className="flex items-center gap-4">
              <label
                htmlFor="female"
                className="block font-medium text-gray-700 m-0"
              >
                Female
              </label>
              <input type="radio" name="gender" id="female" className="mt-0" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Preview
        </button>
      </form>

      {/* <div className="w-full mb-4">
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
      </div> */}
    </div>
  );
}

export default InputPage;
function item(value: boolean, index: number, array: boolean[]): boolean {
  throw new Error("Function not implemented.");
}
