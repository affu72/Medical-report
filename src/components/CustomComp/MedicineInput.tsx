import { useState } from "react";
import Input from "./Input";

interface MedicineInputProps {
  label?: string;
}

const MedicineInput: React.FC<MedicineInputProps> = () => {
  const [medicineType, setMedicineType] = useState("");

  return (
    <div className="relative">
      <Input
        type="text"
        id="medicine-name"
        name="medicine-name"
        placeholder="Enter medicine name..."
        label="Medicine Name"
      />
      <select
        aria-label="Select medicine type"
        className="absolute bottom-5 right-1 pl-4 py-2 bg-white h-12 border-l-0 border-gray-300 rounded-r-md pointer-events-auto text-slate-500"
        value={medicineType}
        onChange={(event) => setMedicineType(event.target.value)}
      >
        <option value="" disabled>
          Type
        </option>
        <option value="tablet">Tablet</option>
        <option value="syrup">Syrup</option>
        <option value="injection">Injection</option>
      </select>
    </div>
  );
};

export default MedicineInput;
