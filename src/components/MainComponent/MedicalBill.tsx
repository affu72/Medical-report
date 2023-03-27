import React, { useState } from "react";
import Button from "../CustomComp/Button";
import Input from "../CustomComp/Input";
import { useFormContext } from "../../Context/FormContext";

export interface IMedicalBill {
  billName: string;
  billValue: string;
  id: number;
}

const MedicalBill = () => {
  const { bills, setBills, handleAddBill } = useFormContext();

  const handlerMedicalBill = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value, name } = event.target;

    const newBills = [...bills];

    newBills[index][name as "billName" | "billValue"] = value;

    setBills(newBills);
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
