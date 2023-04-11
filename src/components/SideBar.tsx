import { useEffect, useRef } from "react";
import { useMyFormContext } from "../Context/MyFormContext";
import PatientList from "./PatientList";

const SideBar = () => {
  const { isOpen, setIsOpen } = useMyFormContext();

  const navbarRef = useRef<HTMLDivElement>(null);

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
              strokeLinecap="round"
              strokeLinejoin="round"
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

      <PatientList />
    </div>
  );
};

export default SideBar;
