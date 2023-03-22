import React from "react";
import { IAddress } from "../../ts/interfaces/Address";
import { IDegree } from "../../ts/interfaces/Degree";
import { IPhone } from "../../ts/interfaces/mobiles";

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
  return (
    <div className="flex justify-between pb-12 border-b-4 border-stone-600">
      <div className="">
        <h3 className="text-3xl font-bold mb-2">{`Dr. ${doctorName}`}</h3>
        <p>{`${degree.degree1}, ${degree.degree2}, ${degree.degree3}`}</p>
        <p>{`Reg. No: ${regNumber}`}</p>
        <p>{`Mob. No:+91-${phone?.phone1}`}</p>
      </div>
      <div className="border-2 border-slate-400 self-start">
        <img
          src="/home/afzal/reactAndTsProjects/medical-report/public/logo.png"
          alt=""
          className="w-28"
        />
      </div>

      <div className="flex flex-col items-start">
        <h2 className="text-center from-neutral-800 text-3xl font-bold mb-2">
          {clinicName}
        </h2>
        <p>{`${address.address1},`}</p>
        <p>{`${address.address2}, ${address.city} - ${address.pin}`}</p>
        <p className="mt-2 font-semibold">{`Timing: ${time?.open} - ${time?.close}`}</p>
        <p className="font-semibold text-red-500">{`Closed: ${closingDay}`}</p>
      </div>
    </div>
  );
};

export default Header;
