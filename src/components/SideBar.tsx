import { useMyFormContext } from "../Context/MyFormContext";
import { BiEdit, BiDownload } from "react-icons/bi";
import { useFormContext } from "react-hook-form";
import { ReactComponent as OpenNavBtn } from "../assets/OpenSidenavIcon.svg";
import { ReactComponent as CloseNavBtn } from "../assets/CloseNavbarIcon.svg";
import { useEffect, useRef } from "react";

const SideBar = () => {
  const { isOpen, setIsOpen, patientData } = useMyFormContext();

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

  return (
    <div
      ref={navbarRef}
      className={`h-screen py-8 min-w-[225px] fixed top-0 left-0 bg-gray-100 ${
        isOpen ? "" : "-translate-x-[225px]"
      } transition-transform duration-500 box-border z-10`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className=" absolute -right-16 top-4"
      >
        {isOpen ? <CloseNavBtn /> : <OpenNavBtn />}
      </button>
      <div className="flex justify-center">
        <input
          autoFocus={true}
          type="text"
          className="rounded-2xl py-2 border-2 border-gray-500 box-border text-center"
          placeholder="Search"
          value=""
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
                {<BiEdit size={"22px"}></BiEdit>}
              </button>
              <button type="button">
                {<BiDownload size={"22px"} tabIndex={index}></BiDownload>}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
