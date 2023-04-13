import { useFormContext } from "react-hook-form";
const PersonalInfoPreview = () => {
  const { watch } = useFormContext();

  const patient = watch("personalDetails");

  return (
    <div className="flex flex-col p-6 gap border-double  border-b-4 border-stone-600">
      <div className="flex justify-between">
        <div>
          <p>
            <span className="font-bold">Id: </span>
            {`${123654}`}
          </p>
        </div>

        <p>
          <span className="font-bold">Date: </span>
          {` ${new Date().toJSON().slice(0, 10).replace(/-/g, "/")}`}
        </p>
      </div>

      <div className="flex justify-between">
        <p>
          <span className="font-bold">Patient Name:</span>
          {`${patient?.gender === "male" ? "Mr. " : ""}${
            patient.gender === "female" ? "Ms. " : ""
          } ${patient?.firstName ?? ""} ${patient?.lastName ?? ""}`}
        </p>

        <p>
          <span className="font-bold">Sex / Age: </span>
          {` ${patient?.gender ?? ""} / ${patient?.age ?? ""}yr.`}
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <p>
            <span className="font-bold">Address: </span>{" "}
            {`${patient?.address ?? ""} ${patient?.city ?? ""} ${
              patient?.state.value ?? ""
            }`}
          </p>
        </div>

        <p>
          <span className="font-bold">Mobile: </span>
          {patient?.mobile}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoPreview;
