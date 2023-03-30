import Input from "../CustomComp/Input";
import Button from "../CustomComp/Button";
import { useMyFormContext } from "../../Context/MyFormContext";

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
  const { handleDoctorForm, handleDoctorInput, doctorData } =
    useMyFormContext();

  // const handleEdit = () => {
  //   const savedFormData = localStorage.getItem("doctorData");
  //   if (savedFormData) {
  //     setFormData(JSON.parse(savedFormData));
  //   }
  // };

  return (
    <div className=" bg-blue-100 h-screen pt-12">
      <form
        onSubmit={handleDoctorForm}
        className="grid grid-cols-2 gap-x-4 max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md"
      >
        <h2 className="col-span-2 text-center mb-8 font-semibold text-3xl text-blue-400">
          Fill Details That will be shown on Prescription
        </h2>
        <Input
          type="text"
          name="clinicName"
          value={doctorData.clinicName}
          onChange={handleDoctorInput}
          placeholder="Clinic Name"
          label="Clinic Name"
        />

        <Input
          type="text"
          name="doctorName"
          value={doctorData.doctorName}
          onChange={handleDoctorInput}
          placeholder={"Doctor's Name"}
          label="Doctor's Name"
        />

        <Input
          type="text"
          name="regNumber"
          value={doctorData.regNumber}
          onChange={handleDoctorInput}
          label="Registration No."
          placeholder="Registration No."
        />

        <Input
          type="text"
          name="clinicAddress"
          value={doctorData.clinicAddress}
          onChange={handleDoctorInput}
          placeholder="Clinic Address"
          label="Address"
        />

        <Input
          type="text"
          name="doctorPhoneNumber"
          value={doctorData.doctorPhoneNumber}
          onChange={handleDoctorInput}
          label="Mobile"
          placeholder="Mobile No. "
        />

        <Input
          type="text"
          name="qualification"
          value={doctorData.qualification}
          onChange={handleDoctorInput}
          placeholder="Qualification"
          label="Qualification (Seprated by Comma)"
        />

        <Input
          type="time"
          name="openingTime"
          value={doctorData.openingTime}
          onChange={handleDoctorInput}
          label="Opening Time"
        />
        <Input
          type="time"
          name="ClosingTime"
          value={doctorData.closingTime}
          onChange={handleDoctorInput}
          label="Closing Time"
        />

        <Input
          type="file"
          name="logo"
          value={doctorData.logo}
          onChange={handleDoctorInput}
          placeholder="Logo"
          accept="image/*"
          label="Upload logo"
        />

        <Input
          type="text"
          name="closingDay"
          value={doctorData.closingDay}
          onChange={handleDoctorInput}
          placeholder="Closing Day"
          label="Closing Day"
        />
        <div className="mt-8 text-center col-span-2">
          <Button type="submit" value="Save & Submit" bgColor="bg-blue-500" />
        </div>
      </form>
    </div>
  );
};

export default DoctorDetails;
