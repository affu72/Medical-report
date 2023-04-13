import { IDoctorDetails } from "../components/DoctorDetails";
import { IOption, IFormData } from "./interfaces";

export const getInputClassName = (className: string = "") => {
  return `border-2 border-gray-300 hover:border-gray-400 transition-all duration-100 py-[8.5px] px-4 w-full rounded-md ${className} outline-blue-500`;
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
  { label: "Delhi", value: "Delhi" },
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
    state: { value: "", label: "" },
    pin: 0,
  },
  id: "",
};

export const isEmpty = (obj: Object) => {
  for (const data of Object.values(obj)) {
    if (data === "" || data === null) return true;
  }

  return false;
};

export const formDataArr: IFormData[] = [
  {
    medicines: [
      {
        id: "98765432John40",
        type: "Tablet",
        name: "Paracetamol",
        dose: "500mg",
        quantity: "2",
      },
      {
        id: "98765432John40",
        type: "Syrup",
        name: "Cough syrup",
        dose: "5ml",
      },
    ],
    personalDetails: {
      pin: 110001,
      city: "New Delhi",
      firstName: "John",
      lastName: "Doe",
      age: 40,
      mobile: "9876543210",
      gender: "Male",
      state: { value: "Delhi", label: "Delhi" },
      address: "123, ABC Street",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 500, id: "98765432John40" },
      { billName: "Medicine cost", billValue: 200, id: "98765432John40" },
    ],
    medicalRecord: {
      histories: [{ label: "Diabetes", value: "diabetes" }],
      symptoms: [{ label: "Headache", value: "headache" }],
      medicalReadings: [
        { readingName: "Blood Pressure", readingValue: "120/80" },
        { readingName: "Heart Rate", readingValue: "70 bpm" },
      ],
    },
    id: "98765432John40",
  },
  {
    medicines: [
      {
        id: "98765432Jane28",
        type: "Capsule",
        name: "Vitamin D3",
        dose: "1000 IU",
        quantity: "1",
      },
      { id: "98765432Jane28", type: "Syrup", name: "Antibiotic", dose: "5ml" },
    ],
    personalDetails: {
      pin: 400001,
      city: "Mumbai",
      firstName: "Jane",
      lastName: "Doe",
      age: 28,
      mobile: "9876543211",
      gender: "Female",
      state: { value: "Maharashtra", label: "Maharashtra" },
      address: "456, XYZ Road",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 600, id: "98765432Jane28" },
      { billName: "Medicine cost", billValue: 150, id: "98765432Jane28" },
    ],
    medicalRecord: {
      histories: [{ label: "Asthma", value: "asthma" }],
      symptoms: [{ label: "Fever", value: "fever" }],
      medicalReadings: [
        { readingName: "Blood Sugar", readingValue: "100 mg/dL" },
        { readingName: "Cholesterol", readingValue: "150 mg/dL" },
      ],
    },
    id: "98765432Jane28",
  },
  {
    medicines: [
      {
        id: "98765432Bob35",
        type: "Tablet",
        name: "Painkiller",
        dose: "500mg",
        quantity: "3",
      },
      {
        id: "98765432Bob35",
        type: "Syrup",
        name: "Cough syrup",
        dose: "10ml",
      },
    ],
    personalDetails: {
      pin: 700001,
      city: "Kolkata",
      firstName: "Bob",
      lastName: "Smith",
      age: 35,
      mobile: "9876543212",
      gender: "Male",
      state: { value: "West Bengal", label: "West Bengal" },
      address: "789, PQR Lane",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 800, id: "98765432Bob35" },
      { billName: "Medicine cost", billValue: 300, id: "98765432Bob35" },
    ],
    medicalRecord: {
      histories: [{ label: "Hypertension", value: "hypertension" }],
      symptoms: [{ label: "Nausea", value: "nausea" }],
      medicalReadings: [
        { readingName: "Body Temperature", readingValue: "98.6°F" },
        { readingName: "Respiratory Rate", readingValue: "16 bpm" },
      ],
    },
    id: "98765432Bob35",
  },
  {
    medicines: [
      {
        id: "98765432Arun29",
        type: "Tablet",
        name: "Ibuprofen",
        dose: "400mg",
      },
      {
        id: "98765432Arun29",
        type: "Syrup",
        name: "Antacid",
        dose: "5ml",
        quantity: "2",
      },
    ],
    personalDetails: {
      pin: 600001,
      city: "Chennai",
      firstName: "Arun",
      lastName: "Kumar",
      age: 29,
      mobile: "9876543213",
      gender: "Male",
      state: { value: "Tamil Nadu", label: "Tamil Nadu" },
      address: "456, XYZ Road",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 700, id: "98765432Arun29" },
      { billName: "Medicine cost", billValue: 350, id: "98765432Arun29" },
    ],
    medicalRecord: {
      histories: [{ label: "Migraine", value: "migraine" }],
      symptoms: [{ label: "Stomach ache", value: "stomach-ache" }],
      medicalReadings: [
        { readingName: "Blood Pressure", readingValue: "130/90" },
        { readingName: "Heart Rate", readingValue: "75 bpm" },
      ],
    },
    id: "98765432Arun29",
  },
  {
    medicines: [
      {
        id: "98765432Priya45",
        type: "Capsule",
        name: "Calcium",
        dose: "500mg",
      },
      {
        id: "98765432Priya45",
        type: "Syrup",
        name: "Antibiotic",
        dose: "10ml",
      },
    ],
    personalDetails: {
      pin: 560001,
      city: "Bengaluru",
      firstName: "Priya",
      lastName: "Sharma",
      age: 45,
      mobile: "9876543214",
      gender: "Female",
      state: { value: "Karnataka", label: "Karnataka" },
      address: "12, LMN Street",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 900, id: "98765432Priya45" },
      { billName: "Medicine cost", billValue: 400, id: "98765432Priya45" },
    ],
    medicalRecord: {
      histories: [{ label: "Osteoporosis", value: "osteoporosis" }],
      symptoms: [{ label: "Joint pain", value: "joint-pain" }],
      medicalReadings: [
        { readingName: "Blood Sugar", readingValue: "120 mg/dL" },
        { readingName: "Cholesterol", readingValue: "170 mg/dL" },
      ],
    },
    id: "98765432Priya45",
  },
  {
    medicines: [
      {
        id: "98765432Akash36",
        type: "Tablet",
        name: "Antihistamine",
        dose: "10mg",
      },
      {
        id: "98765432Akash36",
        type: "Syrup",
        name: "Cough syrup",
        dose: "5ml",
        quantity: "1",
      },
    ],
    personalDetails: {
      pin: 500001,
      city: "Hyderabad",
      firstName: "Akash",
      lastName: "Pandey",
      age: 36,
      mobile: "9876543215",
      gender: "Male",
      state: { value: "Telangana", label: "Telangana" },
      address: "789, PQR Lane",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 750, id: "98765432Akash36" },
      { billName: "Medicine cost", billValue: 250, id: "98765432Akash36" },
    ],
    medicalRecord: {
      histories: [{ label: "Allergy", value: "allergy" }],
      symptoms: [{ label: "Cough", value: "cough" }],
      medicalReadings: [
        { readingName: "Body Temperature", readingValue: "98.2°F" },
        { readingName: "Respiratory Rate", readingValue: "18 bpm" },
      ],
    },
    id: "98765432Akash36",
  },
  {
    medicines: [
      {
        id: "98765432Riya31",
        type: "Tablet",
        name: "Antidepressant",
        dose: "20mg",
      },
      {
        id: "98765432Riya31",
        type: "Syrup",
        name: "Antibiotic",
        dose: "10ml",
        quantity: "2",
      },
    ],
    personalDetails: {
      pin: 380001,
      city: "Ahmedabad",
      firstName: "Riya",
      lastName: "Patel",
      age: 31,
      mobile: "9876543216",
      gender: "Female",
      state: { value: "Gujarat", label: "Gujarat" },
      address: "12, LMN Street",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 850, id: "98765432Riya31" },
      { billName: "Medicine cost", billValue: 300, id: "98765432Riya31" },
    ],
    medicalRecord: {
      histories: [{ label: "Anxiety", value: "anxiety" }],
      symptoms: [{ label: "Depression", value: "depression" }],
      medicalReadings: [
        { readingName: "Blood Pressure", readingValue: "130/80" },
        { readingName: "Heart Rate", readingValue: "72 bpm" },
      ],
    },
    id: "98765432Riya31",
  },
  {
    medicines: [
      { id: "98765432Kunal50", type: "Tablet", name: "Statins", dose: "20mg" },
      {
        id: "98765432Kunal50",
        type: "Syrup",
        name: "Cough syrup",
        dose: "10ml",
        quantity: "3",
      },
    ],
    personalDetails: {
      pin: 600001,
      city: "Chennai",
      firstName: "Kunal",
      lastName: "Sharma",
      age: 50,
      mobile: "9876543217",
      gender: "Male",
      state: { value: "Tamil Nadu", label: "Tamil Nadu" },
      address: "456, XYZ Road",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 700, id: "98765432Kunal50" },
      { billName: "Medicine cost", billValue: 450, id: "98765432Kunal50" },
    ],
    medicalRecord: {
      histories: [{ label: "High Cholesterol", value: "high-cholesterol" }],
      symptoms: [{ label: "Chest Pain", value: "chest-pain" }],
      medicalReadings: [
        { readingName: "Blood Sugar", readingValue: "110 mg/dL" },
        { readingName: "Cholesterol", readingValue: "200 mg/dL" },
      ],
    },
    id: "98765432Kunal50",
  },
  {
    medicines: [
      {
        id: "98765432Radha40",
        type: "Capsule",
        name: "Iron supplement",
        dose: "100mg",
      },
      {
        id: "98765432Radha40",
        type: "Syrup",
        name: "Antibiotic",
        dose: "5ml",
      },
    ],
    personalDetails: {
      pin: 302001,
      city: "Jaipur",
      firstName: "Radha",
      lastName: "Singh",
      age: 40,
      mobile: "9876543218",
      gender: "Female",
      state: { value: "Rajasthan", label: "Rajasthan" },
      address: "789, PQR Lane",
    },
    medicalBills: [
      { billName: "Consultation fee", billValue: 800, id: "98765432Radha40" },
      { billName: "Medicine cost", billValue: 200, id: "98765432Radha40" },
    ],
    medicalRecord: {
      histories: [{ label: "Anemia", value: "anemia" }],
      symptoms: [{ label: "Fatigue", value: "fatigue" }],
      medicalReadings: [
        { readingName: "Body Temperature", readingValue: "98.4°F" },
        { readingName: "Respiratory Rate", readingValue: "20 bpm" },
      ],
    },
    id: "98765432Radha40",
  },
];
