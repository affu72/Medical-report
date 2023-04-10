import { useEffect, useRef } from "react";
import { useMyFormContext } from "../Context/MyFormContext";
import {
  RiEdit2Line,
  RiDeleteBack2Line,
  RiDownload2Line,
} from "react-icons/ri";
import { useFormContext } from "react-hook-form";

const SideBar = () => {
  const { isOpen, setIsOpen, patientData, deletePatientDataHandler } =
    useMyFormContext();

  console.log(patientData);

  const { setValue } = useFormContext();

  const navbarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const editFormHandler = (e: any) => {
    const index = e.currentTarget.tabIndex;
    setValue("personalDetails", patientData?.[index]?.personalDetails);
    setValue("medicalRecord", patientData?.[index]?.medicalRecord);
    setValue("medicines", patientData?.[index]?.medicines);
    setValue("medicalBills", patientData?.[index]?.medicalBills);
  };

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current?.contains(event.target as Node)
      )
        setIsOpen(false);
    };

    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [navbarRef, setIsOpen]);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  console.log(patientData);

  return (
    <div
      ref={navbarRef}
      className={`h-screen py-8 min-w-[225px] fixed top-0 left-0 bg-gray-100 ${
        isOpen ? "" : "-translate-x-full"
      } transition-transform duration-500 box-border z-10`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-16 top-4"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-12 h-12 self-center ml-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div className="flex justify-center">
        <input
          autoFocus={true}
          type="text"
          className="rounded-2xl py-2 border-2 border-gray-500 box-border text-center"
          placeholder="Search"
          ref={searchRef}
        />
      </div>

      <ul className="mt-12 flex flex-col gap-2">
        {patientData?.map((patient, index) => (
          <li
            key={
              patient.personalDetails.mobile + patient.personalDetails.firstName
            }
            className="flex justify-between px-4 py-4 border-b-2 border-gray-400 bg-white text-2xl align-middle w-full"
          >
            <span>
              {`${patient.personalDetails.firstName}
                ${patient.personalDetails.lastName}`}
            </span>

            <div className="flex gap-6">
              <button type="button" onClick={editFormHandler} tabIndex={index}>
                {<RiEdit2Line size={"22px"} />}
              </button>
              <button type="button">
                {<RiDownload2Line size={"22px"} tabIndex={index} />}
              </button>
              <button
                type="button"
                onClick={deletePatientDataHandler}
                tabIndex={index}
              >
                <RiDeleteBack2Line size={"22px"} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
