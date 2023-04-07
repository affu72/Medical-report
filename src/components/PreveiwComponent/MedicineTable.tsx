import React from "react";
import { useMyFormContext } from "../../Context/MyFormContext";

function MedicineTable() {
  const { patientData } = useMyFormContext();
  return (
    <table className="w-full">
      <thead className="  bg-blue-300">
        <tr>
          <th className="border border-blue-500 px-4 py-2">S.No.</th>
          <th className="border border-blue-500 px-4 py-2">Medicine Name</th>
          <th className="border border-blue-500 px-4 py-2">Dosage</th>
          {/* <th className="border border-blue-500 px-4 py-2">Quantity</th> */}
        </tr>
      </thead>
      <tbody>
        {patientData?.at(-1)?.medicines.map((medicine, i) => (
          <tr key={medicine.name}>
            <td className="border px-4 py-2">{i + 1}</td>
            <td className="border px-4 py-2">{`${medicine.type}  ${medicine.name}`}</td>
            <td className="border px-4 py-2">{`${medicine.dose}`}</td>
            {/* <td className="border px-4 py-2">{`${medicine.quantity}`}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedicineTable;
