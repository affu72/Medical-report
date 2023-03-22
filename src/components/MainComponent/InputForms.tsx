import PersonalInformation from "./PersonalInformation";
import Medicines from "./Medicines";
import MedicalHistory from "./MedicalHistory";
import MedicalBill from "./MedicalBill";

interface IProp {
  // inputs: InterfaceInputs;
  inputs: [boolean, boolean, boolean, boolean];
  // handleInputChange: (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => void;
  // generateReport: (event: FormEvent<HTMLFormElement>) => void;
}

function InputForms(props: IProp) {
  console.log(props.inputs);
  return (
    <form className="bg-white flex flex-col gap-6 p-6 basis-2/3">
      <PersonalInformation />,
      <Medicines />,
      <MedicalHistory />,
      <MedicalBill />,
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Preview
      </button>
    </form>
  );
}

export default InputForms;
