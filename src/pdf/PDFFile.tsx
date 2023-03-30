import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import PdfHeader from "./PdfHeader";
import PdfPersonalDetails from "./PdfPersonalDetails";

const PDFFile = () => {
  const styles = StyleSheet.create({
    page: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      border: 2,
      width: "99%",
      height: "99vh",
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <PdfHeader />
        <PdfPersonalDetails />
      </Page>
    </Document>
  );
};
export default PDFFile;
