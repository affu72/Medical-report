export interface IOption {
  label: string;
  value: string;
}

export interface IPersonalData {
  pin: number | undefined;
  city: string;
  firstName: string;
  lastName: string;
  age: number | null;
  mobile: string;
  gender: string;
  state: { value: string; label: string };
  address: string;
}

export interface IMedicalReadings {
  readingName: string;
  readingValue: string;
}

export interface IMedicalBill {
  billName: string;
  billValue: number | null;
  id: string;
}

export interface IMedicine {
  id: string;
  type: string;
  name: string;
  dose: string;
  quantity?: string;
}

export interface IMedicalRecord {
  histories: IOption[];
  symptoms: IOption[];
  medicalReadings: IMedicalReadings[];
}

export interface IFormData {
  medicines: IMedicine[];
  personalDetails: IPersonalData;
  medicalBills: IMedicalBill[];
  medicalRecord: IMedicalRecord;
  id: string;
}
