import { IDoctorDetails } from "../components/DoctorDetails";
import IOption from "./Option";

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

export const option: IOption[] = [
  { label: "Abdominal pain", value: "abdominal pain" },
  { label: "Blood in stool", value: "blood in stool" },
  { label: "Chest pain", value: "chest pain" },
  { label: "Constipation", value: "constipation" },
  { label: "Cough", value: "cough" },
  { label: "Diarrhea", value: "diarrhea" },
  { label: "Dizziness", value: "dizziness" },
  { label: "Fatigue", value: "fatigue" },
  { label: "Fever", value: "fever" },
  { label: "Headache", value: "headache" },
  { label: "Heart palpitations", value: "heart palpitations" },
  { label: "Joint pain", value: "joint pain" },
  { label: "Nausea and vomiting", value: "nausea and vomiting" },
  { label: "Shortness of breath", value: "shortness of breath" },
  { label: "Skin rash", value: "skin rash" },
  { label: "Sore throat", value: "sore throat" },
  { label: "Urinary problems", value: "urinary problems" },
  { label: "Vision problems", value: "vision problems" },
];

export const states = [
  { label: "Select State", value: "" },
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
  { label: "Assam", value: "Assam" },
  { label: "Bihar", value: "Bihar" },
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  { label: "Goa", value: "Goa" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Haryana", value: "Haryana" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Kerala", value: "Kerala" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Manipur", value: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram" },
  { label: "Nagaland", value: "Nagaland" },
  { label: "Odisha", value: "Odisha" },
  { label: "Punjab", value: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Telangana", value: "Telangana" },
  { label: "Tripura", value: "Tripura" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "West Bengal", value: "West Bengal" },
];
