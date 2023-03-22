import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaBookMedical, FaPrescription, FaMoneyBillAlt } from "react-icons/fa";

interface SidebarProp {
  onNavClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tabIndex: number;
}

function SideNav(props: SidebarProp) {
  enum sideButtons {
    personal,
    history,
    medicines,
    bill,
  }

  const tabClass = (index: number) =>
    `w-full flex items-center gap-4  border-b-2  py-4 ${
      props.tabIndex === index
        ? "font-semibold transition-all duration-100 bg-blue-100  translate-x-1"
        : ""
    } border-cyan-500 `;

  return (
    <div className="flex flex-col bg-slate-100 pl-2 py-10 gap-10 items-baseline basis-1/3 drop-shadow-md font-thin box-border">
      <button
        tabIndex={0}
        id="personal-tab"
        value={sideButtons.personal}
        onClick={props.onNavClick}
        className={tabClass(0)}
      >
        <IoIosPersonAdd /> Personal Information
      </button>

      <button
        tabIndex={0}
        id="history-tab"
        value={sideButtons.history}
        onClick={props.onNavClick}
        className={tabClass(1)}
      >
        <FaBookMedical />
        Medical history
      </button>

      <button
        tabIndex={0}
        id="medicine-tab"
        value={sideButtons.medicines}
        onClick={props.onNavClick}
        className={tabClass(2)}
      >
        <FaPrescription />
        Medicines
      </button>
      <button
        tabIndex={0}
        id="bull-tab"
        value={sideButtons.bill}
        onClick={props.onNavClick}
        className={tabClass(3)}
      >
        <FaMoneyBillAlt />
        Medical Bill
      </button>
    </div>
  );
}

export default SideNav;

// interface PropTab {
//   tabIndex?: number;
//   tabBarIndex: number;
//   id?: string;
//   value: string;
//   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   className: string;
// }

// export const TabButton: React.FC<PropTab> = ({
//   tabIndex = 0,
//   tabBarIndex,
//   id,
//   value,
//   onClick,
//   className = `w-full flex items-center gap-4  border-b-2  py-4 ${
//     tabBarIndex === 0
//       ? "font-semibold transition-all duration-100 bg-blue-100  translate-x-1"
//       : ""
//   } border-cyan-500 `,
// }) => {
//   return (
//     <button
//       tabIndex={tabIndex}
//       id={id}
//       value={value}
//       onClick={onClick}
//       className={className}
//     >
//       <FaMoneyBillAlt />
//       Medical Bill
//     </button>
//   );
// };
