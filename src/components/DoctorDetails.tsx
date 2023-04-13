import Button from "./CustomComp/Button";
import { useMyFormContext } from "../Context/MyFormContext";
import { useForm } from "react-hook-form";
import { getInputClassName, getErrorMsg, testData } from "../ts/Contants";
import FormError from "./CustomComp/FormError";
import { useEffect } from "react";
import InputRHF from "./CustomComp/InputRHF";

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
  const {
    setFocus,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoctorDetails>({
    criteriaMode: "firstError",
    mode: "onBlur",
    // delayError: 500,
  });

  const { handleDoctorForm } = useMyFormContext();

  const onFormSubmit = (data: IDoctorDetails) => handleDoctorForm(data);

  useEffect(() => {
    setFocus("clinicName");
  }, [setFocus]);

  return (
    <div className="bg-blue-900 h-screen pt-6 flex items-center">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-2 gap-x-8 max-w-6xl mx-auto px-8 py-6 bg-white rounded-md shadow-md"
      >
        <h2 className="col-span-2 text-center mb-2 font-semibold text-3xl text-blue-400">
          Fill Details That will be shown on Prescription
        </h2>

        <div className="h-24 ">
          <label>Clinic Name</label>
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
          <label>Doctor's Name</label>
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
          <label>Registration No.</label>

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
          <label>Address</label>

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
          <label>Mobile No. </label>

          <input
            type="number"
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
          <label>Opening Time</label>

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
          <label>Closing Time</label>

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
          <label>Logo</label>

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
          <label>Closing Day</label>

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

        <div className=" flex justify-between mt-8 col-span-2 relative">
          <p className="absolute -top-10 left-10">(only for test)</p>
          <Button
            className="self-start text-white"
            type="button"
            value="Fill With Test Data"
            bgColor="bg-yellow-500"
            onClick={() => handleDoctorForm(testData)}
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
