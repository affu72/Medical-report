import { useMyFormContext } from "../Context/MyFormContext";
import { BiEdit, BiDownload } from "react-icons/bi";
import { formDataArr } from "../ts/Contants";
import { useFormContext } from "react-hook-form";

const SideBar = () => {
  const { showNavbar, setShowNavbar, patientData } = useMyFormContext();

  const { setValue } = useFormContext();

  const navStyle = `${showNavbar ? "" : "-translate-x-[225px]"}`;

  const editFormHandler = (e: any) => {
    const index = e.currentTarget.tabIndex;
    setValue("personalDetails", patientData?.[index]?.personalDetails);
    setValue("medicalRecord", patientData?.[index]?.medicalRecord);
    setValue("medicines", patientData?.[index]?.medicines);
    setValue("medicalBills", patientData?.[index]?.medicalBills);
  };

  return (
    <div
      className={`h-screen py-8 min-w-[225px] fixed top-0 left-0 bg-gray-100 ${navStyle} transition-transform duration-500 box-border z-10`}
    >
      <button type="button" onClick={() => setShowNavbar(!showNavbar)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-12 h-12 self-center ml-4 absolute -right-16 top-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex justify-center">
        <input
          autoFocus={true}
          type="text"
          className="rounded-2xl py-2 border-2 border-gray-500 box-border text-center"
          placeholder="Search"
        />
      </div>

      <ul className="mt-12 flex flex-col gap-2">
        {patientData?.map((patient, index) => (
          <li
            key={+patient.personalDetails.mobile + index}
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
