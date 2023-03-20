import React from "react";
import { InterfaceInputs } from "../Modal/Interfaces";

interface IProp {
  inputs: InterfaceInputs;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  generateReport: () => void;
}

function InputPage(props: IProp) {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <h2 className="text-2xl text-center font-bold">Report</h2>

      <div className="w-full mb-4">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
          Patient Name
        </label>
        <div className="flex gap-10">
          <input
            className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
            type="text"
            name="first-name"
            id="name"
            value={props.inputs.name}
            onChange={props.handleInputChange}
            placeholder="first name"
          />

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
      </div>

      <div>
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="gender"
        >
          Gender
        </label>

        <select
          name="gender"
          id=""
          className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="w-full mb-4">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="age">
          Patient Age
        </label>
        <input
          className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
          type="number"
          name="age"
          id="age"
          value={props.inputs.age}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="w-full mb-4">
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
      </div>
      <div className="w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={props.generateReport}
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default InputPage;
