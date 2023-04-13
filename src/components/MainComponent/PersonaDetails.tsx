import InputRHF from "../CustomComp/InputRHF";
import { states } from "../../ts/Contants";
import { Controller, useFormContext } from "react-hook-form";
import FormError from "../CustomComp/FormError";
import Select from "react-select";
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
    <div className="gap-4">
      <div className="flex gap-8">
        <InputRHF
          name="personalDetails.firstName"
          label="First Name"
          placeholder="Enter First Name eg. John"
          control={control}
        ></InputRHF>

        <InputRHF
          name="personalDetails.lastName"
          label="Last Name"
          placeholder="Enter last Name eg. Doe"
          control={control}
        ></InputRHF>
      </div>

      <InputRHF
        name="personalDetails.age"
        label="Age"
        placeholder="eg. 23"
        type="number"
        control={control}
      />

      <div className=" flex gap-6 items-center w-full">
        <label className="m-0 font-semibold">Gender</label>

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
        type="tel"
        control={control}
      ></InputRHF>

      <InputRHF
        name="personalDetails.address"
        placeholder="Address"
        label="Address"
        control={control}
      ></InputRHF>

      <div className="flex gap-8">
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

        <div className="flex flex-col basis-1/2">
          <label htmlFor="personalDetails.state" className="font-semibold">
            State
          </label>
          <Controller
            control={control}
            name="personalDetails.state"
            render={({ formState: { errors }, field: { onChange } }) => (
              <Select
                options={states}
                onChange={onChange}
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    border: "2px solid rgb(209 213 219)",
                  }),
                }}
              ></Select>
            )}
          />
        </div>
      </div>
    </div>
  );
}
export default PersonaDetails;
