import React, { useState } from "react";
import Button from "../CustomComp/Button";
import Input from "../CustomComp/Input";

interface MedicalBillProps {
  onInputChange?: (bill: { name: string; value: number }[]) => void;
}

const MedicalBill: React.FC<MedicalBillProps> = ({ onInputChange }) => {
  const [bills, setBills] = useState<{ name: string; value: number }[]>([
    { name: "", value: 0 },
  ]);

  const handleBillNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;
    const newBills = [...bills];
    newBills[index].name = value;
    setBills(newBills);
  };

  const handleAddBill = () => {
    setBills((prev) => [...prev, { name: "", value: 0 }]);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...bills];
    list.splice(index, 1);
    setBills(list);
  };

  return (
    <div className="flex flex-col space-y-4 items-start">
      <label className="self-center" htmlFor="">
        Medical Bill
      </label>
      {bills.map((bill, index) => (
        <div
          key={index}
          className="flex space-x-4 place-items-start xl:justify-between"
        >
          <Input
            placeholder="Bill Name"
            value={bill.name}
            // onChange={(event) => handleBillNameChange(event, index)}
          />

          <Input
            placeholder="Bill Value"
            type="number"
            value={bill.value}
            // onChange={(event) => handleBillValueChange(event, index)}
          />

          {bills.length !== 1 && (
            <Button
              type="button"
              value="x"
              bgColor="red"
              margin={0.5}
              onClick={() => handleRemoveClick(index)}
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
