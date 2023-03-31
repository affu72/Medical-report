import Button from "./CustomComp/Button";
import { useMyFormContext } from "../Context/MyFormContext";
import { useForm } from "react-hook-form";
import { inputClassname } from "../ts/Contants";

export interface IDoctorDetails {
  clinicName: string;
  doctorName: string;
  clinicAddress: string;
  doctorPhoneNumber: string;
  regNumber: string;
  qualification: string;
  logo: string;
  openingTime: string;
  closingTime: string;
  closingDay: string;
}

const DoctorDetails = () => {
  //react-hook-form

  // (async () => {
  //   const userData = await fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     });

  //   console.log(userData.results[0].email);
  // })();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoctorDetails>({
    defaultValues: {
      clinicName: "Care Medical Center",
    },
  });
  const { handleDoctorForm, doctorData } = useMyFormContext();

  const onFormSubmit = (data: IDoctorDetails) => console.log(data);

  return (
    <div className="bg-blue-100 h-screen pt-6">
      <form
        // onSubmit={handleDoctorForm}
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
            {...register("clinicName")}
            className={inputClassname}
          />

          <span className="text-red-900">{errors.clinicName?.message}</span>
        </div>

        <div>
          <label>Doctors Name</label>
          <input
            type="text"
            placeholder={"Doctor's Name"}
            className={inputClassname}
          />
        </div>

        <div>
          <label>Registration No.</label>

          <input
            type="text"
            placeholder="Registration No."
            className={inputClassname}
            {...register("regNumber")}
          />
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Clinic Address"
            className={inputClassname}
            {...register("clinicAddress")}
          />
        </div>

        <div>
          <label>Mobile No. </label>
          <input
            type="text"
            placeholder="Mobile no."
            className={inputClassname}
            {...register("doctorPhoneNumber")}
          />
        </div>

        <div>
          <label>Qualification (ex. M.B.B.S, M.D, M.S)</label>

          <input
            type="text"
            placeholder="Qualification"
            className={inputClassname}
            {...register("qualification")}
          />
        </div>

        <div>
          <label>Opening Time</label>

          <input
            type="time"
            className={inputClassname}
            {...register("openingTime")}
          />
        </div>

        <div>
          <label>Closing Time</label>
          <input
            type="time"
            className={inputClassname}
            {...register("closingTime")}
          />
        </div>

        <div>
          <label>Logo</label>
          <input
            type="file"
            placeholder="Logo"
            accept="image/*"
            className={inputClassname}
            {...register("logo")}
          />
        </div>

        <div>
          <label>Closing Day</label>

          <input
            type="text"
            placeholder="Closing Day"
            className={inputClassname}
            {...register("closingDay")}
          />
        </div>

        <div className="mt-8 text-center col-span-2">
          <Button type="submit" value="Save & Submit" bgColor="bg-blue-500" />
        </div>
      </form>
    </div>
  );
};

export default DoctorDetails;
