import { useMyFormContext } from "../../Context/MyFormContext";

const MedicalRecordPreview = () => {
  const { patientData } = useMyFormContext();

  return (
    <div className="gap-2 p-6">
      <div className="break-words">
        <span className="font-bold">Medical history: </span>
        {patientData?.medicalRecord.histories.map((option, index) => (
          <span key={option.value} className="px-2 py-1">
            {option.value}
            {index < patientData?.medicalRecord.histories.length - 1 ? "," : ""}
          </span>
        ))}
      </div>

      <div className="break-words">
        <span className="font-bold">Known Symptoms: </span>
        {patientData?.medicalRecord.symptoms.map((option, index) => (
          <span key={option.value} className="px-2 py-1">
            {option.value}
            {index < patientData?.medicalRecord.symptoms.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordPreview;
