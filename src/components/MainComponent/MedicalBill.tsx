import Button from "../CustomComp/Button";
import Input from "../CustomComp/Input";
import { useMyFormContext } from "../../Context/MyFormContext";

export interface IMedicalBill {
  billName: string;
  billValue: string;
  id: number;
}

const MedicalBill = () => {
  const { bills, setBills, handleAddBill } = useMyFormContext();

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

  return (
    <div className="flex flex-col space-y-2 items-start md:w-full md:item-between">
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
              bgColor="bg-red-500"
              margin={0.5}
              onClick={() => handleRemoveClick(bill.id)}
            />
          )}
        </div>
      ))}
      <Button
        type="button"
        value="Add Anoher Bill"
        bgColor="bg-blue-500"
        onClick={handleAddBill}
      />
    </div>
  );
};

export default MedicalBill;
