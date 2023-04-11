import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaBookMedical, FaPrescription, FaMoneyBillAlt } from "react-icons/fa";
import { useMyFormContext } from "../../Context/MyFormContext";

enum sideButtons {
  personal,
  history,
  medicines,
  bill,
}

const SideNav = () => {
  const { showFormHandler, tabIndex } = useMyFormContext();

  const tabClass = (index: number) =>
    `w-full flex items-center gap-2 border-b-2 py-8 hover:bg-blue-100 ${
      tabIndex === index
        ? "font-semibold transition-all duration-100 bg-blue-300 min-xl:translate-x-3 xl:translate-y-4"
        : ""
    } border-cyan-500 xl:w-auto xl:py-2 xl:px-1 rounded-4 rounded`;

  return (
    <div className="flex flex-col bg-slate-100 p-2 drop-shadow-md  box-border xl:flex-row xl:justify-between xl:basis-auto md:flex-col md:justify-start md:gap-4">
      <button
        tabIndex={0}
        id="personal-tab"
        value={sideButtons.personal}
        onClick={showFormHandler}
        className={tabClass(0)}
      >
        <IoIosPersonAdd className="xl:hidden" /> Personal Details
      </button>

      <button
        tabIndex={0}
        id="history-tab"
        value={sideButtons.history}
        onClick={showFormHandler}
        className={tabClass(1)}
      >
        <FaBookMedical className="xl:hidden" />
        Medical Record
      </button>

      <button
        tabIndex={0}
        id="medicine-tab"
        value={sideButtons.medicines}
        onClick={showFormHandler}
        className={tabClass(2)}
      >
        <FaPrescription className="xl:hidden" />
        Medicines
      </button>
      <button
        tabIndex={0}
        id="bull-tab"
        value={sideButtons.bill}
        onClick={showFormHandler}
        className={tabClass(3)}
      >
        <FaMoneyBillAlt className="xl:hidden" />
        Bills
      </button>
    </div>
  );
};

export default SideNav;
