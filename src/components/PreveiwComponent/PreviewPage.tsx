import React, { useEffect, useRef } from "react";
import Header from "./Header";
import PersonalInfoPreview from "./PersonalDetailPreview";
import MedicalRecordPreview from "./MedicalRecordPreview";
import { useMyFormContext } from "../../Context/MyFormContext";
import Pdf from "react-to-pdf";
import Button from "../CustomComp/Button";
import MedicineTable from "./MedicineTable";
import MedicalBillPreview from "./MedicalBillPreview";
import MedicalReadingPreview from "./MedicalReadingPreview";

function PreviewPage() {
  const { tabIndex, patientData, setHasDoctorData } = useMyFormContext();

  const ref = useRef<HTMLDivElement>(null);

  console.log(patientData);

  useEffect(() => {
    const h = ref.current?.getClientRects();
    console.log("h", h);
  });

  const options = {
    orientation: "p",
    unit: "px",
    format: [453, 500],
    floatPrecision: 20,
  };

  //JSX
  return (
    <div className="flex flex-col gap-4  bg-slate-100  p-4 relative">
      <div className="w-full flex bg-slate-100 py-[6px] px-2 drop-shadow-md box-border text-right justify-between md:hidden">
        <Button
          value="Edit Doctor's Details"
          bgColor="bg-blue-500"
          onClick={() => {
            localStorage.removeItem("doctorData");
            setHasDoctorData(false);
          }}
        />

        <Pdf
          targetRef={ref}
          filename={`${patientData?.at(-1)?.personalDetails.firstName}.pdf`}
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
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
              >
                Generate Pdf
              </button>
            )
          }
        </Pdf>
      </div>
      <div
        ref={ref}
        className="w-[800px] min-h-[841px] px-6 flex-none bg-white"
      >
        <Header></Header>

        <PersonalInfoPreview />

        <MedicalRecordPreview />
        <div className="flex p-6 justify-around">
          <MedicalReadingPreview />
          <MedicineTable />
        </div>

        <MedicalBillPreview />
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
