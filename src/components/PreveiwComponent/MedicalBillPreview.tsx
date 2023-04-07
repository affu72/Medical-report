import React from "react";
import { useMyFormContext } from "../../Context/MyFormContext";
import MedicalBill from "../MainComponent/MedicalBill";

const MedicalBillPreview = () => {
  const { patientData } = useMyFormContext();

  return (
    <table className="w-1/4 absolute left-8 bottom-8">
      <h2 className="text-3xl mb-2">Fees: (All in Rs)</h2>
      <tbody>
        {patientData?.at(-1)?.medicalBills.map((bill, i) => (
          <tr key={MedicalBill.name}>
            <td className="border px-4 py-2">{`${bill.billName}`}</td>
            <td className="border px-4 py-2">{`${bill.billValue}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicalBillPreview;
