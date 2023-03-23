import { IMedicine } from "../MainComponent/Medicines";

interface PropMedicinePreview {
  medicines: IMedicine[];
}

const MedicinePreview: React.FC<PropMedicinePreview> = ({ medicines }) => {
  return (
    <div className="flex flex-col gap-2 mt-8 align-middle">
      <div className="flex justify-evenly font-bold border-2 border-red bg-slate-300">
        <span>Medicne Name</span>
        <span>Dose</span>
        {/* <span>Quantity</span> */}
      </div>
      {medicines.map((medicine) => {
        return (
          <div key={medicine.name} className="flex p-4 justify-evenly">
            <span>{`${medicine.type} ${medicine.name}`}</span>
            <span className="self">{medicine.dose}</span>
            {/* <span>{medicine.quantity}</span> */}
          </div>
        );
      })}
    </div>
  );
};

export default MedicinePreview;
