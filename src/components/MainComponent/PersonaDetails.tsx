import Input from "../MyComponents/Input";
import IndianStateDropdown from "../MyComponents/IndianStateDropDown";

export interface IFormData {
  firstName: string;
  lastName: string;
  age: number;
  mobile: string;
  gender: string;
  state: string;
}

type PropType = {
  formData: IFormData;
  getData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

function PersonaDetails({ getData, formData }: PropType) {
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    getData(event);
  };

  return (
    <div>
      <div className="flex gap-8">
        <Input
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={inputChangeHandler}
        ></Input>
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={inputChangeHandler}
        ></Input>
      </div>

      <Input
        name="age"
        label="Age"
        placeholder="Age"
        type="number"
        onChange={inputChangeHandler}
        value={formData.age}
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
              onChange={inputChangeHandler}
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
              onChange={inputChangeHandler}
              value={formData.gender}
            />
          </div>
        </div>
      </div>

      <Input
        name="mobile"
        placeholder="Mobile"
        label="Mobile"
        type="number"
        onChange={inputChangeHandler}
        value={formData.mobile}
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
          value={formData.state}
          onChange={inputChangeHandler}
        ></IndianStateDropdown>
      </div>
    </div>
  );
}
export default PersonaDetails;
