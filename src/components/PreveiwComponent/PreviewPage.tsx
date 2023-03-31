import React, { createRef, useRef } from "react";
import Header from "./Header";
import PersonalInfoPreview from "./PersonalDetailPreview";
import MedicalRecordPreview from "./MedicalRecordPreview";
import { useMyFormContext } from "../../Context/MyFormContext";
import MedicineTable from "./MedicineTable";
import Pdf from "react-to-pdf";

function PreviewPage() {
  const { tabIndex, personalData } = useMyFormContext();

  const ref = useRef(null);

  const options = {
    orientation: "p",
    unit: "px",
    format: "a4",
    floatPrecision: 2,
  };

  //JSX
  return (
    <>
      <div ref={ref} className="w-[800px] min-h-screen p-6 flex-none relative">
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
    </>
  );
}

export default PreviewPage;
