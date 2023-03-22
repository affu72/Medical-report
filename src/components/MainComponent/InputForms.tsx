import PersonalInformation from "./PersonalInformation";
import Medicines from "./Medicines";
import MedicalHistory from "./MedicalHistory";
import MedicalBill from "./MedicalBill";

interface PropInput {
  tabIndex: number;
}

const InputForms: React.FC<PropInput> = ({ tabIndex }) => {
  const formSection = [
    <PersonalInformation key={1} />,
    <Medicines key={2} />,
    <MedicalHistory key={3} />,
    <MedicalBill key={4} />,
  ];

  return (
    <>
      <form
        className="bg-white flex flex-col gap-6 p-6 basis-2/3 relative"
        id="main-form"
      >
        {formSection[tabIndex]}

        <button
          form="main-form"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-3 rounded flex-none absolute bottom-0 left-0 w-full"
        >
          Preview
        </button>
      </form>
    </>
  );
};

export default InputForms;
