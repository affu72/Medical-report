import React from "react";
import { FaBarcode, FaPhone } from "react-icons/fa";
import { IAddress } from "../../ts/interfaces/Address";
import { IPhone } from "../../ts/interfaces/mobiles";
import { IPatientName } from "../../ts/interfaces/name";

export interface PersonalInfoProp {
  ID?: number;
  name: IPatientName;
  age: number;
  gender: string;
  address?: IAddress;
  barCodeSrc?: string;
  phone: IPhone;
}

const PersonalInfoPreview: React.FC<PersonalInfoProp> = (props) => {
  const { ID, name, age, gender, address, phone } = props;
  return (
    <div className="flex flex-col pt-6 pb-6 px-2 gap border-double  border-b-4 border-stone-600">
      <div className="flex justify-between">
        <div>
          {/* <FaBarcode /> */}
          <p>
            <span className="font-bold">Id: </span>
            {`${ID}`}
          </p>
        </div>

        <p>
          <span className="font-bold">Date: </span>
          {` ${new Date(2023, 2, 3).toLocaleDateString()}`}
        </p>
      </div>

      <div className="flex justify-between">
        <p>
          <span className="font-bold">Patient Name:</span>
          {` ${name.firstName} ${name.secondName}`}
        </p>

        <p>
          <span className="font-bold">Sex / Age: </span>
          {` ${gender} / ${age}`}
        </p>
      </div>

      <div className="flex justify-between">
        {/* <div>
          <p>
            <span className="font-bold">Address: </span>{" "}
            {`${address.address1} ${address.address2}`}
          </p>
          <p>{`${address.city} - ${address.pin} (${address.state})`}</p>
        </div> */}

        <p>
          <span className="font-bold">Mobile: </span>
          {phone.phone1}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoPreview;
