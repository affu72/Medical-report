import { IMedicine } from "../../ts/interfaces";
interface PropMedicinePreview {
  medicines: IMedicine[];
}

const MedicinePreview: React.FC<PropMedicinePreview> = ({ medicines }) => {
  return (
    <div className="flex flex-col gap-2 p-6 align-middle">
      <div className="flex justify-around font-bold border-2 border-red bg-slate-300">
        <span>Medicne Name</span>
        <span>Dose</span>
        {/* <span>Quantity</span> */}
      </div>
      {medicines.map((medicine) => {
        return (
          <div key={medicine.id} className="flex gap-1 justify-around">
            <span>{`${medicine.type} ${medicine.name}`}</span>
            <span>{medicine.dose}</span>
            {/* <span>{medicine.quantity}</span> */}
          </div>
        );
      })}
    </div>
  );
};

export default MedicinePreview;
