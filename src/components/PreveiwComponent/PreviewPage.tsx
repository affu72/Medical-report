import Header from "./Header";
import PersonalInfoPreview from "./PersonalDetailPreview";
import { IAddress } from "../../ts/interfaces/Address";
import MedicalRecordPreview from "./MedicalRecordPreview";
import { IMedicine } from "../MainComponent/Medicines";
import MedicinePreview from "./MedicinePreview";
import { useFormContext } from "../../Context/FormContext";

function PreviewPage() {
  const { personalData, medicalHistories, symptoms } = useFormContext();

  const firstName = personalData?.firstName;
  const secondName = personalData?.lastName;
  const id = 78625287;
  const age = personalData?.age;
  const gender = personalData?.gender;
  const phone = personalData?.mobile;

  const address: IAddress = {
    address1: personalData.address,
    address2: "",
    city: personalData.city,
    state: personalData.state,
    pin: personalData.pin,
  };

  //dummy data

  const medicines: IMedicine[] = [
    { name: "Aspirin", dose: "81mg", type: "Tablet", quantity: "100", id: 0 },
  ];

  //JSX
  return (
    <div className="bg-gray-100 w-1/2 min-h-screen p-6 border-double border-4 flex-none xs:w-full">
      <Header
        clinicName="Care Medical Center"
        doctorName="B.S Tiwari"
        degree={{ degree1: "M.B.B.S", degree2: "M.D", degree3: "M.S" }}
        regNumber={270999}
        phone={{ phone1: 987654321 }}
        address={{
          address1: "123 Main road near Axis Bank",
          address2: "Kothrud",
          city: "Pune",
          pin: 416086,
          state: "Mumbai",
        }}
        time={{ open: "09:00AM", close: "02:00PM" }}
        closingDay="Thursday"
      ></Header>

      <PersonalInfoPreview
        ID={id}
        name={{ firstName: firstName, secondName: secondName }}
        age={age}
        gender={gender}
        address={{
          address1: address.address1,
          address2: address.address2,
          city: address.city,
          state: address.state,
          pin: address.pin,
        }}
        phone={{ phone1: phone }}
      />

      <div className="">
        <MedicalRecordPreview
          optionSymptoms={symptoms}
          optionsHistory={medicalHistories}
        />

        <MedicinePreview medicines={medicines} />
      </div>
    </div>
  );
}

export default PreviewPage;
