import { IMedicine } from "../MainComponent/Medicines";

interface PropMedicinePreview {
  medicines: IMedicine[];
}

const MedicinePreview: React.FC<PropMedicinePreview> = ({ medicines }) => {
  return <div>Medicines</div>;
};

export default MedicinePreview;
