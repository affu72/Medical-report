import React from "react";
import logo from "./logo.png";
import { useMyFormContext } from "../../Context/MyFormContext";

const Header = () => {
  let { doctorData } = useMyFormContext();

  if (!doctorData.clinicName)
    doctorData = JSON.parse(localStorage.getItem("doctorData")!);

  return (
    <div className="flex justify-between p-6 border-b-4 border-stone-600 xs:hidden">
      <div className="flex flex-col items-start">
        <h3 className="text-3xl font-bold mb-2">{`Dr. ${doctorData.doctorName}`}</h3>
        <p>{`${doctorData.qualification}`}</p>
        <p>
          <span className="font-semibold">Reg. No: </span>{" "}
          {`${doctorData.regNumber}`}
        </p>
        <p>
          <span className="font-semibold">Mob. No:</span>{" "}
          {`+91-${doctorData.doctorPhoneNumber}`}
        </p>
      </div>
      <div className="border-2 border-slate-400 self-start">
        <img src={logo} alt="" className="w-28" />
      </div>

      <div className="flex flex-col items-end">
        <h2 className="text-center from-neutral-800 text-3xl font-bold mb-2">
          {doctorData.clinicName}
        </h2>
        <p className="text-right">{`${doctorData.clinicAddress}`}</p>
        <p className="mt-2 font-semibold">{`Timing: ${doctorData.openingTime} - ${doctorData.closingTime}`}</p>
        <p className="font-semibold text-red-500">{`Closed: ${doctorData.closingDay}`}</p>
      </div>
    </div>
  );
};

export default Header;
