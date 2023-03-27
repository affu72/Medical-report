import React, { useState } from "react";
import Button from "../CustomComp/Button";
import Input from "../CustomComp/Input";

interface IMedicalBill {
  billName: string;
  billValue: string;
  id: number;
}
interface PropMedicalBill {
  onInputChange?: (bill: IMedicalBill[]) => void;
}

const MedicalBill = ({ onInputChange }: PropMedicalBill) => {
  const [bills, setBills] = useState<IMedicalBill[]>([
    { billName: "", billValue: "", id: 0 },
  ]);

  const handlerMedicalBill = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value, name } = event.target;

    const newBills = [...bills];

    newBills[index][name as "billName" | "billValue"] = value;

    setBills(newBills);
  };

  const handleAddBill = () => {
    setBills((prev) => [
      ...prev,
      { billName: "", billValue: "", id: prev[prev.length - 1]["id"] + 1 },
    ]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...bills];
    list.splice(index, 1);
    setBills(list);
  };

  console.log(bills);

  return (
    <div className="flex flex-col space-y-4 items-start">
      <label className="self-center" htmlFor="">
        Medical Bill
      </label>
      {bills.map((bill) => (
        <div
          key={bill.id}
          className="flex space-x-4 place-items-start xl:justify-between"
        >
          <Input
            name="billName"
            placeholder="Bill Name"
            value={bill.billName}
            onChange={(event) => handlerMedicalBill(event, bill.id)}
          />

          <Input
            placeholder="Bill Value"
            type="number"
            name="billValue"
            value={bill.billValue}
            onChange={(event) => handlerMedicalBill(event, bill.id)}
          />

          {bills.length !== 1 && (
            <Button
              type="button"
              value="x"
              bgColor="red"
              margin={0.5}
              onClick={() => handleRemoveClick(bill.id)}
            />
          )}
        </div>
      ))}
      <Button
        type="button"
        value="Add Anoher Bill"
        bgColor="blue"
        onClick={handleAddBill}
      />
    </div>
  );
};

export default MedicalBill;
