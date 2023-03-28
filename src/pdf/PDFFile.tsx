import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import PdfHeader from "./PdfHeader";

interface PropPdf {
  data?: any;
}

const PDFFile = ({ data }: PropPdf) => {
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
      </Page>
    </Document>
  );
};
export default PDFFile;
