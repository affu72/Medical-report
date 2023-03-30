import React, { useState } from "react";
import Input from "../CustomComp/Input";
import Button from "../CustomComp/Button";

interface FormState {
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
  const [formData, setFormData] = useState<FormState>({
    clinicName: "",
    doctorName: "",
    clinicAddress: "",
    doctorPhoneNumber: "",
    regNumber: "",
    qualification: "",
    logo: "",
    openingTime: "",
    closingTime: "",
    closingDay: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("doctorData", JSON.stringify(formData));
    alert("Form data saved to local storage!");
  };

  // const handleEdit = () => {
  //   const savedFormData = localStorage.getItem("formData");
  //   if (savedFormData) {
  //     setFormData(JSON.parse(savedFormData));
  //   }
  // };

  return (
    <div className=" bg-blue-100 h-screen pt-24">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-x-4 max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md"
      >
        <h2 className="col-span-2 text-center mb-8 font-semibold text-3xl text-blue-400">
          Fill Details That will be shown on Prescription
        </h2>
        <Input
          type="text"
          name="clinicName"
          value={formData.clinicName}
          onChange={handleChange}
          placeholder="Clinic Name"
          label="Clinic Name"
        />

        <Input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder={"Doctor's Name"}
          label="Doctor's Name"
        />

        <Input
          type="text"
          name="regNumber"
          value={formData.regNumber}
          onChange={handleChange}
          label="Registration No."
          placeholder="Registration No."
        />

        <Input
          type="text"
          name="clinicAddress"
          value={formData.clinicAddress}
          onChange={handleChange}
          placeholder="Clinic Address"
          label="Address"
        />

        <Input
          type="text"
          name="doctorPhoneNumber"
          value={formData.doctorPhoneNumber}
          onChange={handleChange}
          label="Mobile"
          placeholder="Mobile No. "
        />

        <Input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          placeholder="Qualification"
          label="Qualification (Seprated by Comma)"
        />

        <Input
          type="time"
          name="openingTime"
          value={formData.openingTime}
          onChange={handleChange}
          label="Opening Time"
        />
        <Input
          type="time"
          name="ClosingTime"
          value={formData.closingTime}
          onChange={handleChange}
          label="Closing Time"
        />

        <Input
          type="file"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
          placeholder="Logo"
          accept="image/*"
          label="Upload logo"
        />

        <Input
          type="text"
          name="closingDay"
          value={formData.closingDay}
          onChange={handleChange}
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
