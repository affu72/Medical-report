import { useFormContext } from "react-hook-form";
import { useMyFormContext } from "../../Context/MyFormContext";
import MedicalRecord from "../MainComponent/MedicalRecord";
import IOption from "../../ts/Option";

const MedicalRecordPreview = () => {
  const { patientData } = useMyFormContext();

  const { watch } = useFormContext();

  const histories: IOption[] = watch("medicalRecord.histories");
  const symptoms: IOption[] = watch("medicalRecord.symptoms");

  return (
    <div className="gap-2 p-6">
      <div className="break-words">
        <span className="font-bold">Medical history: </span>
        {histories.map((option, index) => (
          <span key={option.value} className="px-2 py-1">
            {option.value}
            {histories.length - 1 !== index ? "," : ""}
          </span>
        ))}
      </div>

      <div className="break-words">
        <span className="font-bold">Known Symptoms: </span>
        {symptoms?.map((option, index) => (
          <span key={option.value} className="px-2 py-1">
            {option.value}
            {symptoms.length - 1 !== index ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordPreview;
