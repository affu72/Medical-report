import Button from "./CustomComp/Button";
import { useMyFormContext } from "../Context/MyFormContext";
import { useForm } from "react-hook-form";
import { getInputClassName, getErrorMsg, testData } from "../ts/Contants";
import FormError from "./CustomComp/FormError";

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoctorDetails>();
  const { handleDoctorForm } = useMyFormContext();

  const onFormSubmit = (data: IDoctorDetails) => handleDoctorForm(data);

  return (
    <div className="bg-blue-900 h-screen pt-6">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-2 gap-x-8 gap-y-8 max-w-5xl mx-auto p-6 bg-white rounded-md shadow-md"
      >
        <h2 className="col-span-2 text-center mb-8 font-semibold text-3xl text-blue-400">
          Fill Details That will be shown on Prescription
        </h2>

        <div>
          <label>Clinic Name</label>

          <input
            placeholder="Clinic Name"
            type="text"
            {...register("clinicName", {
              required: {
                value: true,
                message: getErrorMsg("Clinic name"),
              },
            })}
            className={getInputClassName(
              `${errors.clinicName ? " outline-red-700" : ""}`
            )}
          />
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicName" />
          )}
        </div>

        <div>
          <label>Doctor's Name</label>

          <input
            type="text"
            placeholder={"Doctor's Name"}
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
          {errors.doctorName && (
            <FormError errors={errors} inputName="doctorName" />
          )}
        </div>

        <div>
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

          {errors.clinicName && (
            <FormError errors={errors} inputName="regNumber" />
          )}
        </div>

        <div>
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
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicAddress" />
          )}
        </div>

        <div>
          <label>Mobile No. </label>

          <input
            type="tel"
            placeholder="Mobile no."
            className={getInputClassName(
              `${errors.doctorPhoneNumber ? " outline-red-700" : ""}`
            )}
            {...register("doctorPhoneNumber", {
              required: {
                value: true,
                message: getErrorMsg("Mobile Number"),
              },
            })}
          />
          {errors.clinicName && (
            <FormError errors={errors} inputName="doctorPhoneNumber" />
          )}
        </div>

        <div>
          <label>Qualification (ex. M.B.B.S, M.D, M.S)</label>

          <input
            type="text"
            placeholder="Qualification"
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
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicName" />
          )}
        </div>

        <div>
          <label>Opening Time</label>
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicName" />
          )}

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
        </div>

        <div>
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
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicName" />
          )}
        </div>

        <div>
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
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicName" />
          )}
        </div>

        <div>
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
          {errors.clinicName && (
            <FormError errors={errors} inputName="clinicName" />
          )}
        </div>

        <div className=" flex justify-between mt-8 col-span-2 relative">
          <p className="absolute -top-10 left-10">(only for test)</p>
          <Button
            className="self-start"
            type="button"
            value="Fill With Test Data"
            bgColor="bg-yellow-500"
            onClick={() => handleDoctorForm(testData)}
          ></Button>
          <Button
            className="self-end"
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
