import React, { createRef, useRef } from "react";
import Header from "./Header";
import PersonalInfoPreview from "./PersonalDetailPreview";
import MedicalRecordPreview from "./MedicalRecordPreview";
import { useMyFormContext } from "../../Context/MyFormContext";
import MedicineTable from "./MedicineTable";
import Pdf from "react-to-pdf";

function PreviewPage() {
  const { tabIndex, personalData, medicalHistories, symptoms } =
    useMyFormContext();

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
      <div
        ref={ref}
        className="w-[800px] min-h-screen p-6 flex-none md:h-screen"
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
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-6 left-1/4 md:`}
              >
                Generate Pdf
              </button>
            )
          }
        </Pdf>
        <Header
          clinicName="Care Medical Center"
          doctorName="B.S Tiwari"
          degree={{ degree1: "M.B.B.S", degree2: "M.D", degree3: "M.S" }}
          regNumber={270999}
          phone={{ phone1: 987654321 }}
          address={{
            address1: "123 Main road near Axis Bank",
            address2: "Kothrud",
            city: "Pune",
            pin: 416086,
            state: "Mumbai",
          }}
          time={{ open: "09:00AM", close: "02:00PM" }}
          closingDay="Thursday"
        ></Header>

        <PersonalInfoPreview />

        <div className="">
          <MedicalRecordPreview
            optionSymptoms={symptoms}
            optionsHistory={medicalHistories}
          />

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
