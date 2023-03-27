import Input from "../CustomComp/Input";
import IndianStateDropdown from "../CustomComp/IndianStateDropDown";
import { useFormContext } from "../../Context/FormContext";

export interface IPersonalData {
  pin: number | undefined;
  city: string;
  firstName: string;
  lastName: string;
  age: number;
  mobile: string;
  gender: string;
  state: string;
  address: string;
}

type PropType = {
  getData?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

function PersonaDetails({ getData }: PropType) {
  const { personalData, inputPersonalDetailsHandler } = useFormContext();

  return (
    <div>
      <div className="flex gap-8">
        <Input
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value={personalData.firstName}
          onChange={inputPersonalDetailsHandler}
        ></Input>
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          value={personalData.lastName}
          onChange={inputPersonalDetailsHandler}
        ></Input>
      </div>

      <Input
        name="age"
        label="Age"
        placeholder="Age"
        type="number"
        onChange={inputPersonalDetailsHandler}
        value={personalData.age}
      ></Input>

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
            <input
              type="radio"
              name="gender"
              id="male"
              className="mt-0"
              onChange={inputPersonalDetailsHandler}
            />
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="female"
              className="block font-medium text-gray-700 m-0"
            >
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="mt-0"
              onChange={inputPersonalDetailsHandler}
              value={personalData.gender}
            />
          </div>
        </div>
      </div>

      <Input
        name="mobile"
        placeholder="Mobile"
        label="Mobile"
        type="number"
        onChange={inputPersonalDetailsHandler}
        value={personalData.mobile}
      ></Input>
      <Input
        name="Address"
        placeholder="Address"
        label="Address"
        labelOption={true}
      ></Input>

      <div className="flex justify-between gap-8">
        <Input name="City" placeholder="City" label="City"></Input>
        <Input
          name="Pin Code"
          placeholder="PIN"
          label="Pin Code"
          labelOption={true}
          type="number"
        ></Input>
      </div>

      <div className="w-full mb-4">
        <label htmlFor="name">State</label>
        <IndianStateDropdown
          value={personalData.state}
          onChange={inputPersonalDetailsHandler}
        ></IndianStateDropdown>
      </div>
    </div>
  );
}
export default PersonaDetails;
