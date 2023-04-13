import { IDoctorDetails } from "../components/DoctorDetails";
import { IFormData } from "../components/MainComponent/InputForms";
import IOption from "./Option";

export const getInputClassName = (className: string = "") => {
  return `border-2 border-gray-300 py-[5px] px-4 w-full rounded-md ${className} outline-blue-500`;
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

export const deafaultFormValue: IFormData = {
  medicines: [{ name: "", dose: "", id: "", type: "" }],
  medicalBills: [{ billName: "", id: "", billValue: null }],
  medicalRecord: {
    histories: [],
    symptoms: [],
    medicalReadings: [{ readingName: "", readingValue: "" }],
  },
  personalDetails: {
    firstName: "",
    lastName: "",
    age: null,
    gender: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pin: 0,
  },
  id: "",
};

export const formDataArr: IFormData[] = [
  {
    id: "1234567890John30",
    medicines: [
      {
        id: "a",
        type: "Tablet",
        name: "Paracetamol",
        dose: "500 mg",
        quantity: "10",
      },
      {
        id: "b",
        type: "Capsule",
        name: "Amoxicillin",
        dose: "250 mg",
        quantity: "20",
      },
    ],
    personalDetails: {
      pin: 123456,
      city: "New York",
      firstName: "John",
      lastName: "Doe",
      age: 30,
      mobile: "1234567890",
      gender: "Male",
      state: "NY",
      address: "123 Main St",
    },
    medicalBills: [
      { billName: "Doctor Visit", billValue: 100, id: "a" },
      { billName: "Medicines", billValue: 50, id: "b" },
    ],
    medicalRecord: {
      histories: [
        { label: "Heart Attack", value: "heart-attack" },
        { label: "Malaria", value: "malaria" },
        { label: "Flu", value: "flu" },
      ],
      symptoms: [
        { label: "Fever", value: "fever" },
        { label: "Cough", value: "cough" },
        { label: "Headache", value: "headache" },
      ],
      medicalReadings: [],
    },
  },
  {
    id: "0987654321Jane40",
    medicines: [
      {
        id: "c",
        type: "Tablet",
        name: "Ibuprofen",
        dose: "400 mg",
        quantity: "30",
      },
      {
        id: "d",
        type: "Capsule",
        name: "Clarithromycin",
        dose: "500 mg",
        quantity: "10",
      },
    ],
    personalDetails: {
      pin: 654321,
      city: "Los Angeles",
      firstName: "Jane",
      lastName: "Doe",
      age: 40,
      mobile: "0987654321",
      gender: "Female",
      state: "CA",
      address: "456 Elm St",
    },
    medicalBills: [
      { billName: "Tests", billValue: 200, id: "a" },
      { billName: "Medicines", billValue: 75, id: "b" },
    ],
    medicalRecord: {
      histories: [
        { label: "Arthritis", value: "arthritis" },
        { label: "Asthma", value: "asthma" },
        { label: "Cancer", value: "cancer" },
      ],
      symptoms: [
        { label: "Shortness of breath", value: "shortness-of-breath" },
        { label: "Pain in joints", value: "pain-in-joints" },
        { label: "Loss of appetite", value: "loss-of-appetite" },
      ],
      medicalReadings: [],
    },
  },
  {
    id: "9876543210Bob50",
    medicines: [
      {
        id: "e",
        type: "Tablet",
        name: "Metformin",
        dose: "500 mg",
        quantity: "60",
      },
      {
        id: "f",
        type: "Capsule",
        name: "Losartan",
        dose: "50 mg",
        quantity: "30",
      },
    ],
    personalDetails: {
      pin: 789012,
      city: "Chicago",
      firstName: "Bob",
      lastName: "Smith",
      age: 50,
      mobile: "9876543210",
      gender: "Male",
      state: "IL",
      address: "789 Oak St",
    },
    medicalBills: [
      { billName: "Tests", billValue: 150, id: "a" },
      { billName: "Medicines", billValue: 100, id: "b" },
    ],
    medicalRecord: {
      histories: [
        { label: "Diabetes", value: "diabetes" },
        { label: "High Blood Pressure", value: "high-blood-pressure" },
        { label: "Cholesterol", value: "cholesterol" },
      ],
      symptoms: [
        { label: "Fatigue", value: "fatigue" },
        { label: "Dizziness", value: "dizziness" },
        { label: "Nausea", value: "nausea" },
      ],
      medicalReadings: [],
    },
  },

  {
    id: "9876543210Amit30",
    medicines: [
      {
        id: "a",
        type: "Tablet",
        name: "Paracetamol",
        dose: "500 mg",
        quantity: "10",
      },
      {
        id: "b",
        type: "Capsule",
        name: "Amoxicillin",
        dose: "250 mg",
        quantity: "20",
      },
    ],
    personalDetails: {
      pin: 110001,
      city: "New Delhi",
      firstName: "Amit",
      lastName: "Kumar",
      age: 30,
      mobile: "9876543210",
      gender: "Male",
      state: "Delhi",
      address: "42, Sadar Thana Rd, Sadar Bazaar",
    },
    medicalBills: [
      { billName: "Doctor Visit", billValue: 100, id: "a" },
      { billName: "Medicines", billValue: 50, id: "b" },
    ],
    medicalRecord: {
      histories: [
        { label: "Heart Attack", value: "heart-attack" },
        { label: "Malaria", value: "malaria" },
        { label: "Flu", value: "flu" },
      ],
      symptoms: [
        { label: "Fever", value: "fever" },
        { label: "Cough", value: "cough" },
        { label: "Headache", value: "headache" },
      ],
      medicalReadings: [],
    },
  },
  {
    id: "8765432109Rahul40",
    medicines: [
      {
        id: "c",
        type: "Tablet",
        name: "Ibuprofen",
        dose: "400 mg",
        quantity: "30",
      },
      {
        id: "d",
        type: "Capsule",
        name: "Clarithromycin",
        dose: "500 mg",
        quantity: "10",
      },
    ],
    personalDetails: {
      pin: 411001,
      city: "Pune",
      firstName: "Rahul",
      lastName: "Sharma",
      age: 40,
      mobile: "8765432109",
      gender: "Male",
      state: "Maharashtra",
      address: "121, Shivaji Nagar",
    },
    medicalBills: [
      { billName: "Tests", billValue: 200, id: "a" },
      { billName: "Medicines", billValue: 75, id: "b" },
    ],
    medicalRecord: {
      histories: [
        { label: "Arthritis", value: "arthritis" },
        { label: "Asthma", value: "asthma" },
        { label: "Cancer", value: "cancer" },
      ],
      symptoms: [
        { label: "Shortness of breath", value: "shortness-of-breath" },
        { label: "Pain in joints", value: "pain-in-joints" },
        { label: "Loss of appetite", value: "loss-of-appetite" },
      ],
      medicalReadings: [],
    },
  },
  {
    id: "7654321098Priya50",
    medicines: [
      {
        id: "e",
        type: "Tablet",
        name: "Metformin",
        dose: "500 mg",
        quantity: "60",
      },
      {
        id: "f",
        type: "Capsule",
        name: "Losartan",
        dose: "50 mg",
        quantity: "30",
      },
    ],
    personalDetails: {
      pin: 600001,
      city: "Chennai",
      firstName: "Priya",
      lastName: "Nair",
      age: 50,
      mobile: "7654321098",
      gender: "Female",
      state: "Tamil Nadu",
      address: "7, Anna Salai",
    },
    medicalBills: [
      { billName: "Tests", billValue: 150, id: "a" },
      { billName: "Medicines", billValue: 100, id: "b" },
    ],
    medicalRecord: {
      histories: [
        { label: "Diabetes", value: "diabetes" },
        { label: "High Blood Pressure", value: "high-blood-pressure" },
        { label: "Cholesterol", value: "cholesterol" },
      ],
      symptoms: [
        { label: "Fatigue", value: "fatigue" },
        { label: "Dizziness", value: "dizziness" },
        { label: "Nausea", value: "nausea" },
      ],
      medicalReadings: [],
    },
  },
];
