import { useMyFormContext } from "../../Context/MyFormContext";

const PersonalInfoPreview = () => {
  const { patientData } = useMyFormContext();

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
          {` ${patientData?.personalDetails.firstName} ${patientData?.personalDetails.lastName}`}
        </p>

        <p>
          <span className="font-bold">Sex / Age: </span>
          {` ${patientData?.personalDetails.gender} / ${patientData?.personalDetails.age}yr.`}
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <p>
            <span className="font-bold">Address: </span>{" "}
            {`${patientData?.personalDetails.address} ${patientData?.personalDetails?.city} ${patientData?.personalDetails?.state}`}
          </p>
        </div>

        <p>
          <span className="font-bold">Mobile: </span>
          {patientData?.personalDetails.mobile}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoPreview;
