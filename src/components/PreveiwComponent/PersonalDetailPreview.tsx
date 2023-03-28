import { useMyFormContext } from "../../Context/MyFormContext";

const PersonalInfoPreview = () => {
  const { personalData } = useMyFormContext();

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
          {` ${personalData.firstName} ${personalData.lastName}`}
        </p>

        <p>
          <span className="font-bold">Sex / Age: </span>
          {` ${personalData.gender} / ${personalData.age}yr.`}
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <p>
            <span className="font-bold">Address: </span>{" "}
            {`${personalData.address} ${personalData?.city} ${personalData?.state}`}
          </p>
        </div>

        <p>
          <span className="font-bold">Mobile: </span>
          {personalData.mobile}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoPreview;
