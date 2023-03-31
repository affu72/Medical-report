import React from "react";
import { IAddress } from "../../ts/Address";
import { IDegree } from "../../ts/Degree";
import { IPhone } from "../../ts/mobiles";
import logo from "./logo.png";
import { useMyFormContext } from "../../Context/MyFormContext";

interface ITime {
  open: string;
  close: string;
}

interface HeaderProp {
  doctorName: string;
  clinicName: string;
  logoSrc?: string;
  address: IAddress;
  regNumber: number;
  degree: IDegree;
  phone: IPhone;
  time: ITime;

  closingDay?: string;
}

const Header: React.FC<HeaderProp> = ({
  clinicName,
  doctorName,
  address,
  degree,
  regNumber,
  phone,
  time,
  closingDay,
}) => {
  let { doctorData } = useMyFormContext();

  if (!doctorData.clinicName)
    doctorData = JSON.parse(localStorage.getItem("doctorData")!);

  return (
    <div className="flex justify-between p-6 border-b-4 border-stone-600 xs:hidden">
      <div className="">
        <h3 className="text-3xl font-bold mb-2">{`Dr. ${doctorData.doctorName}`}</h3>
        <p>{`${doctorData.qualification}`}</p>
        <p>{`Reg. No: ${doctorData.regNumber}`}</p>
        <p>{`Mob. No:+91-${doctorData.doctorPhoneNumber}`}</p>
      </div>
      <div className="border-2 border-slate-400 self-start">
        <img src={logo} alt="" className="w-28" />
      </div>

      <div className="flex flex-col items-start">
        <h2 className="text-center from-neutral-800 text-3xl font-bold mb-2">
          {doctorData.clinicName}
        </h2>
        <p>{`${address.address1},`}</p>
        <p>{`${address.address2}, ${address.city} - ${address.pin}`}</p>
        <p className="mt-2 font-semibold">{`Timing: ${doctorData.openingTime} - ${doctorData.closingTime}`}</p>
        <p className="font-semibold text-red-500">{`Closed: ${doctorData.closingDay}`}</p>
      </div>
    </div>
  );
};

export default Header;
