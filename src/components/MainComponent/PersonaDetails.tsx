import IndianStateDropdown from "../CustomComp/Select";
import InputRHF from "../CustomComp/InputRHF";
import { states } from "../../ts/Contants";
import { useFormContext } from "react-hook-form";
import FormError from "../CustomComp/FormError";
export interface IPersonalData {
  pin: number | undefined;
  city: string;
  firstName: string;
  lastName: string;
  age: number | null;
  mobile: string;
  gender: string;
  state: string;
  address: string;
}

function PersonaDetails() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="">
      <div className="flex gap-8 md:justify-between">
        <InputRHF
          name="personalDetails.firstName"
          label="First Name"
          placeholder="First Name"
          control={control}
        ></InputRHF>

        <InputRHF
          name="personalDetails.lastName"
          label="Last Name"
          placeholder="Enter last Name"
          control={control}
        ></InputRHF>
      </div>

      <InputRHF
        name="personalDetails.age"
        label="Age"
        placeholder="Age"
        type="number"
        control={control}
      />

      <div className=" flex gap-16 items-center w-full mb-4">
        <label className="m-0">Gender</label>

        <div className="flex gap-8">
          <div className="flex items-center gap-4 p-2">
            <label
              htmlFor="male"
              className="block font-medium text-gray-700 m-0"
            >
              Male
            </label>
            <input
              {...register("personalDetails.gender")}
              type="radio"
              id="male"
              className="mt-0"
              value={"male"}
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
              {...register("personalDetails.gender", {
                required: "This field is required",
              })}
              type="radio"
              id="female"
              className="mt-0"
              value={"female"}
            />
          </div>
        </div>
        <FormError errors={errors} name={"personalDetails.gender"} />
      </div>

      <InputRHF
        name="personalDetails.mobile"
        placeholder="Mobile"
        label="Mobile"
        type="number"
        control={control}
      ></InputRHF>

      <InputRHF
        name="personalDetails.address"
        placeholder="Address"
        label="Address"
        control={control}
      ></InputRHF>

      <div className="flex justify-between gap-8">
        <InputRHF
          name="personalDetails.city"
          placeholder="City"
          label="City"
          control={control}
        ></InputRHF>

        {/* <Input
          name="pin"
          placeholder="PIN"
          label="Pin Code"
          labelOption={true}
          type="number"
        ></Input> */}

        <div className="w-full flex flex-col">
          <label htmlFor="name">State</label>
          <IndianStateDropdown
            control={control}
            name="personalDetails.state"
            options={states}
          ></IndianStateDropdown>
        </div>
      </div>
    </div>
  );
}
export default PersonaDetails;
