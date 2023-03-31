import React, { createRef, useRef } from "react";
import Header from "./Header";
import PersonalInfoPreview from "./PersonalDetailPreview";
import MedicalRecordPreview from "./MedicalRecordPreview";
import { useMyFormContext } from "../../Context/MyFormContext";
import MedicineTable from "./MedicineTable";
import Pdf from "react-to-pdf";
import Button from "../CustomComp/Button";

function PreviewPage() {
  const { tabIndex, personalData, setHasDoctorData } = useMyFormContext();

  const ref = useRef(null);

  const options = {
    orientation: "p",
    unit: "px",
    format: "a4",
    floatPrecision: 2,
  };

  //JSX
  return (
    <div className="flex flex-col gap-4  bg-slate-100  p-4">
      <div className="w-full flex bg-slate-100 py-[6px] px-2 drop-shadow-md box-border text-right justify-end md:hidden">
        <Button
          value="Edit Form"
          bgColor="bg-blue-500"
          onClick={() => {
            localStorage.removeItem("doctorData");
            setHasDoctorData(false);
          }}
        />
      </div>
      <div
        ref={ref}
        className="w-[800px] min-h-screen px-6 flex-none relative bg-white"
      >
        <Pdf
          targetRef={ref}
          filename={`${personalData.firstName}.pdf`}
          options={options}
          x={1}
          y={1}
          scale={1}
        >
          {({ toPdf }: any) =>
            tabIndex === 3 && (
              <button
                form="main-form"
                type="submit"
                onClick={toPdf}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute  bottom-[2.5%] -left-8 -translate-x-full xl:bottom-[2.5%] xl:-left-8 xl:-translate-x-full md:left-[650px] md:bottom-[102.5%] lg:bottom-[3%] lg:-left-8`}
              >
                Generate Pdf
              </button>
            )
          }
        </Pdf>
        <Header></Header>

        <PersonalInfoPreview />

        <div className="">
          <MedicalRecordPreview />

          <MedicineTable />
        </div>
      </div>

      {/* react-pdf */}

      {/* <PDFViewer showToolbar={true} className="w-1/2">
        <PDFFile></PDFFile>
      </PDFViewer>
      <PDFDownloadLink
        document={<PDFFile />}
        fileName="medical"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 bg-blue-700 py-2 decoration-none hover:bg-blue-900 text-white hover:text-white"
      >
        <button>Generate Pdf</button>
      </PDFDownloadLink> */}
    </div>
  );
}

export default PreviewPage;
