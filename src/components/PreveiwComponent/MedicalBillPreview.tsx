import { useFormContext } from "react-hook-form";
import { IMedicalBill } from "../../ts/interfaces";
const MedicalBillPreview = () => {
  const { watch } = useFormContext();

  const bills: IMedicalBill[] = watch("medicalBills");

  const total = bills
    ?.map((bill) => bill?.billValue)
    .reduce((curr, val) => {
      return +val! + curr!;
    }, 0);

  return (
    <div className="w-1/3 relative mt-12 pl-8">
      {bills.length >= 1 &&
        bills[0].billName !== "" &&
        bills[0].billValue !== 0 && (
          <>
            <h2 className="text-2xl">Fees: (All in Rs)</h2>
            <table className="border-2 border-slate-900">
              <tbody className="border-2 border-slate-900">
                {bills?.map((bill, i) => {
                  if (bill.billName !== "" || bill.billValue !== 0) {
                    return (
                      <tr
                        key={bill.billName}
                        className="border-2 border-slate-900"
                      >
                        <td className=" px-4 py-2 border-2 border-slate-900">{`${
                          bill?.billName ?? ""
                        }`}</td>
                        <td className=" px-4 py-2 border-2 border-slate-900">{`${
                          bill?.billValue ?? ""
                        }/-`}</td>
                      </tr>
                    );
                  }
                  return "";
                })}
                {total !== 0 && (
                  <tr className=" px-4 py-2 border-2 border-slate-900">
                    <td className=" px-4 py-2 border-2 border-slate-900">
                      Total
                    </td>
                    <td className=" px-4 py-2 border-2 border-slate-900">
                      {total}/-
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
    </div>
  );
};

export default MedicalBillPreview;
