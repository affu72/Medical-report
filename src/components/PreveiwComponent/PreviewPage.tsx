import Header from "./Header";
import PersonalInfoPreview from "./PersonalDetailPreview";
import { IAddress } from "../../ts/interfaces/Address";
import MedicalRecordPreview from "./MedicalRecordPreview";

function PreviewPage() {
  const firstName = "Aniruddha";
  const secondName = "";
  const id = 78625287;
  const age = 24;
  const gender = "Male";
  const phone = 9876543210;

  const address: IAddress = {
    address1: "B-1 Nilesh 142 Senapati Bapat Rd",
    address2: "Matunga ",
    city: "Pune",
    state: "Mumbai",
    pin: 400016,
  };

  return (
    <div className="bg-gray-100 w-1/2 h-screen p-12">
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

      <MedicalRecordPreview
        optionSymptoms={[
          { value: "Fever", label: "Fever" },
          { value: "Headache", label: "Headache" },
        ]}
        optionsHistory={[{ value: "Sugar", label: "Sugar" }]}
      ></MedicalRecordPreview>
    </div>
  );
}

export default PreviewPage;
