import React from "react";
import { useFormContext } from "react-hook-form";
import { IMedicine } from "../../ts/interfaces";

function MedicineTable() {
  const { watch } = useFormContext();

  const medicines: IMedicine[] = watch("medicines");
  return (
    <>
      {medicines.length >= 1 &&
        medicines[0].name !== "" &&
        medicines[0].dose !== "" && (
          <table className="w-2/3">
            <thead className="  bg-blue-300">
              <tr>
                <th className="border border-blue-500 px-4 py-2">S.No.</th>
                <th className="border border-blue-500 px-4 py-2">
                  Medicine Name
                </th>
                <th className="border border-blue-500 px-4 py-2">Dosage</th>
                {/* <th className="border border-blue-500 px-4 py-2">Quantity</th> */}
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, i) => (
                <tr key={medicine.name}>
                  <td className="border px-4 py-2 w-">{i + 1}</td>
                  <td className="border px-4 py-2">{`${medicine.type}  ${medicine.name}`}</td>
                  <td className="border px-4 py-2">{`${medicine.dose}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </>
  );
}

export default MedicineTable;
