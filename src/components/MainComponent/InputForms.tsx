import PersonalInformation from "./PersonaDetails";
import Medicines from "./Medicines";
import MedicalHistory from "./MedicalRecord";
import MedicalBill from "./MedicalBill";

interface PropInput {
  tabIndex: number;
}

const InputForms: React.FC<PropInput> = ({ tabIndex }) => {
  const formSection = [
    <PersonalInformation key={0} />,
    <MedicalHistory key={1} />,
    <Medicines key={2} />,
    <MedicalBill key={3} />,
  ];

  return (
    <div className="bg-white flex flex-col justify-between gap-8 p-6 basis-2/3 xl:basis-11/12 relative overflow-auto flex-none">
      <form id="main-form">{formSection[tabIndex]}</form>
      <button
        form="main-form"
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-3 rounded w-full"
      >
        Preview
      </button>
    </div>
  );
};

export default InputForms;
