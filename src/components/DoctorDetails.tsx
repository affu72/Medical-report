import Button from "./CustomComp/Button";
import { useMyFormContext } from "../Context/MyFormContext";
import {
  getInputClassName,
  getErrorMsg,
  testData,
} from "../ts/Contants";
import FormError from "./CustomComp/FormError";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export interface IDoctorDetails {
  clinicName: string;
  doctorName: string;
  clinicAddress: string;
  doctorPhoneNumber: number;
  regNumber: string;
  qualification: string;
  logo: string;
  openingTime: string;
  closingTime: string;
  closingDay: string;
}

const DoctorDetails = () => {
  const { handleDoctorForm } = useMyFormContext();

  let defaultDoctorData = testData;

  if (localStorage.getItem("doctorData")) {
    defaultDoctorData = JSON.parse(localStorage.getItem("doctorData")!);
  }

  const {
    reset,
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoctorDetails>({
    defaultValues: defaultDoctorData,
    criteriaMode: "firstError",
    mode: "onTouched",
    shouldFocusError: true,
  });

  const onFormSubmit = (data: IDoctorDetails) => {
    handleDoctorForm(data);
  };

  useEffect(() => {
    setFocus("clinicName");
  }, [setFocus]);

  return (
    <div className=" h-screen pt-6 flex items-center bg-blue-950">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-2 gap-x-8 max-w-6xl mx-auto px-8 py-6 bg-white rounded-md shadow-md"
      >
        <h2 className="col-span-2 text-center mb-2 font-semibold text-3xl text-blue-400">
          Fill Details That will be shown on Prescription
        </h2>

        <div className="h-24">
          <label className="font-semibold">Clinic Name</label>
          <input
            type="text"
            placeholder="Enter Clinic Name"
            className={getInputClassName(
              `${errors.clinicName ? " outline-red-700" : ""}`
            )}
            {...register("clinicName", {
              required: {
                value: true,
                message: getErrorMsg("Clinic Name"),
              },
            })}
          />

          {errors.clinicName && <FormError errors={errors} name="clinicName" />}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Doctor's Name</label>
          <input
            type="text"
            placeholder="Enter Doctor's Name"
            className={getInputClassName(
              `${errors.doctorName ? " outline-red-700" : ""}`
            )}
            {...register("doctorName", {
              required: {
                value: true,
                message: getErrorMsg("Doctor's Name"),
              },
            })}
          />

          {errors.doctorName && <FormError errors={errors} name="doctorName" />}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Registration No.</label>

          <input
            type="text"
            placeholder="Registration No."
            className={getInputClassName(
              `${errors.regNumber ? " outline-red-700" : ""}`
            )}
            {...register("regNumber", {
              required: {
                value: true,
                message: getErrorMsg("registration No."),
              },
            })}
          />

          {errors.regNumber && <FormError errors={errors} name="regNumber" />}
        </div>

        <div className="h-24">
          <label className="font-semibold">Address</label>

          <input
            type="text"
            placeholder="Clinic Address"
            className={getInputClassName(
              `${errors.clinicAddress ? " outline-red-700" : ""}`
            )}
            {...register("clinicAddress", {
              required: {
                value: false,
                message: getErrorMsg("Clinic Address"),
              },
            })}
          />
          {errors.clinicAddress && (
            <FormError errors={errors} name="clinicAddress" />
          )}
        </div>

        <div className="">
          <label className="font-semibold">Mobile No. </label>

          <input
            type="tel"
            placeholder="Mobile no."
            className={getInputClassName(
              `${errors.doctorPhoneNumber ? " outline-red-700" : ""}`
            )}
            {...register("doctorPhoneNumber", {
              required: {
                value: true,
                message: "Mobile Cannot be empty",
              },
              minLength: {
                value: 10,
                message: "Should be 10 digit",
              },
              maxLength: {
                value: 10,
                message: "Enter valid Number",
              },
            })}
          />
          {errors.doctorPhoneNumber && (
            <FormError errors={errors} name="doctorPhoneNumber" />
          )}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Qualification</label>

          <input
            type="text"
            placeholder="ex. M.B.B.S, M.D, M.S"
            className={getInputClassName(
              `${errors.qualification ? " outline-red-700" : ""}`
            )}
            {...register("qualification", {
              required: {
                value: true,
                message: getErrorMsg("Qualification"),
              },
            })}
          />
          {errors.qualification && (
            <FormError errors={errors} name="qualification" />
          )}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Opening Time</label>

          <input
            type="time"
            className={getInputClassName(
              `${errors.openingTime ? " outline-red-700" : ""}`
            )}
            {...register("openingTime", {
              required: {
                value: false,
                message: getErrorMsg("Opening time"),
              },
            })}
          />
          {errors.openingTime && (
            <FormError errors={errors} name="clinicName" />
          )}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Closing Time</label>

          <input
            type="time"
            className={getInputClassName(
              `${errors.closingTime ? " outline-red-700" : ""}`
            )}
            {...register("closingTime", {
              required: {
                value: false,
                message: getErrorMsg("Closing Time"),
              },
            })}
          />
          {errors.closingTime && (
            <FormError errors={errors} name="closingTime" />
          )}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Logo</label>

          <input
            type="file"
            placeholder="Logo"
            accept="image/*"
            className={getInputClassName(
              `${errors.logo ? " outline-red-700" : ""}`
            )}
            {...register("logo", {
              required: {
                value: false,
                message: getErrorMsg("Logo"),
              },
            })}
          />
          {errors.logo && <FormError errors={errors} name="logo" />}
        </div>

        <div className="h-24 ">
          <label className="font-semibold">Closing Day</label>

          <input
            type="text"
            placeholder="Closing Day"
            className={getInputClassName(
              `${errors.closingDay ? " outline-red-700" : ""}`
            )}
            {...register("closingDay", {
              required: {
                value: false,
                message: getErrorMsg("Closing"),
              },
            })}
          />
          {errors.closingDay && <FormError errors={errors} name="closingDay" />}
        </div>

        <div className="flex justify-end mt-8 col-span-2 relative">
          <Button
            className="self-start text-white"
            type="button"
            value="Fill With Test Data"
            bgColor="bg-yellow-500"
            onClick={() => reset(testData)}
          ></Button>

          <Button
            className="self-end text-white"
            type="submit"
            value="Save & Submit"
            bgColor="bg-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default DoctorDetails;
