import React from "react";
import Input from "./MyComponents/Input";

function PersonalInformation() {
  return (
    <div>
      <Input
        name="First Name"
        label="First Name"
        placeholder="First Name"
      ></Input>
      <Input name="Last Name" label="Last Name" placeholder="Last Name"></Input>
      <Input name="age" label="Age" placeholder="Age" type="number"></Input>

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

      <Input
        name="mobile"
        placeholder="Mobile"
        label="Mobile"
        type="number"
      ></Input>
      <Input name="Address" placeholder="Address" label="Address"></Input>

      <div className="flex justify-between gap-8">
        <Input name="City" placeholder="City" label="City"></Input>
        <Input
          name="Pin Code"
          placeholder="PIN"
          label="Pin Code"
          type="number"
        ></Input>
      </div>

      <Input name="staet" placeholder="State" label="State"></Input>
    </div>
  );
}
export default PersonalInformation;
