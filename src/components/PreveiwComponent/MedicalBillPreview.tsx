import React from "react";
import { useMyFormContext } from "../../Context/MyFormContext";
import MedicalBill from "../MainComponent/MedicalBill";
import { access } from "fs";

const MedicalBillPreview = () => {
  const { patientData } = useMyFormContext();

  const total = patientData
    ?.at(-1)
    ?.medicalBills?.map((bill) => bill.billValue)
    .reduce((curr, val) => {
      return +val! + curr!;
    }, 0);



  return (
    <div className="w-1/4  my-16">
      <h2 className="text-3xl">Fees: (All in Rs)</h2>
      <table className="border-2 border-slate-900">
        <tbody className="border-2 border-slate-900">
          {patientData?.at(-1)?.medicalBills.map((bill, i) => (
            <tr key={bill.billName} className="border-2 border-slate-900">
              <td className=" px-4 py-2 border-2 border-slate-900">{`${bill.billName}`}</td>
              <td className=" px-4 py-2 border-2 border-slate-900">{`${bill.billValue}/`}</td>
            </tr>
          ))}
          <tr className=" px-4 py-2 border-2 border-slate-900">
            <td className=" px-4 py-2 border-2 border-slate-900">Total</td>
            <td className=" px-4 py-2 border-2 border-slate-900">{total}/</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MedicalBillPreview;
