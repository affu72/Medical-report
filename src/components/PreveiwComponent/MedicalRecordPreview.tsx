import { useFormContext } from "react-hook-form";
import { IOption } from "../../ts/interfaces";

const MedicalRecordPreview = () => {
  const { watch } = useFormContext();

  const histories: IOption[] = watch("medicalRecord.histories");
  const symptoms: IOption[] = watch("medicalRecord.symptoms");

  return (
    <div className="gap-2 p-6">
      <div className="break-words">
        <span className="font-bold">Medical history: </span>
        {histories?.map((option, index) => (
          <span key={option.value} className="py-1 mr-1">
            {option.value}
            {histories?.length - 1 !== index ? "," : ""}
          </span>
        ))}
      </div>

      <div className="break-words">
        <span className="font-bold">Known Symptoms: </span>
        {symptoms?.map((option, index) => (
          <span key={option.value} className="py-1 mr-1">
            {option.value}
            {symptoms?.length - 1 !== index ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordPreview;
