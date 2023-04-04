import { IDoctorDetails } from "../components/DoctorDetails";

export const getInputClassName = (className: string = "") => {
  return `border-2 border-gray-300 py-2 px-4 w-full rounded-md ${className}`;
};

export const getErrorMsg = (name: string) => `${name} cannot be empty`;

export const testData: IDoctorDetails = {
  clinicName: "Care Medical Center",
  doctorName: "B.S Tiwari",
  qualification: "M.B.B.S, MD, MS",
  regNumber: "270999",
  doctorPhoneNumber: 9874562130,
  clinicAddress: `123 Main road near Axis Bank Kothrud Pune`,
  openingTime: "09:00AM",
  closingTime: "02:00PM",
  closingDay: "Thursday",
  logo: "",
};
