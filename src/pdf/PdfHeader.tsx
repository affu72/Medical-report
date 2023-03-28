import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import logo from "../components/PreveiwComponent/logo.png";
import { styles } from "./PdfStyle";

const clinicName = "Care Medical Center";
const doctorName = "Dr. B.S Tiwari";
const degree = { degree1: "M.B.B.S", degree2: "M.D", degree3: "M.S" };
const regNumber = 270999;
const phone = { phone1: 987654321 };
const address = {
  address1: "123 Main road near Axis Bank",
  address2: "Kothrud",
  city: "Pune",
  pin: 416086,
  state: "Mumbai",
};

const time = { open: "09:00AM", close: "02:00PM" };
const closingDay = "Thursday";

function PdfHeader() {
  return (
    <View style={styles.header}>
      <View style={{ margin: 20, display: "flex", gap: "3px" }}>
        <Text style={styles.heading}>{doctorName}</Text>
        <Text style={styles.text}>
          {`${degree.degree1} ${degree.degree2}, ${degree.degree3}`}
        </Text>
        <Text style={styles.text}>{`Reg. No: ${regNumber}`}</Text>
        <Text style={styles.text}>{`Mob. No:+91-${phone?.phone1}`}</Text>
      </View>
      <View>
        <Image src={logo} style={styles.logo} />
      </View>
      <View style={{ margin: 20, display: "flex", gap: "4px" }}>
        <Text style={styles.heading}>{clinicName}</Text>
        <Text style={styles.text}>{`${address.address1},`}</Text>
        <Text
          style={styles.text}
        >{`${address.address2}, ${address.city} - ${address.pin}`}</Text>

        <View style={{ display: "flex", gap: "2px" }}>
          <Text style={{ fontSize: 12, color: `#333333`, marginTop: 2 }}>
            <Text>Timing: </Text> {`${time?.open} - ${time?.close}`}
          </Text>
          <Text style={{ fontWeight: "extrabold", fontSize: 12, color: "red" }}>
            Closed:
            <Text style={{ color: "#333333" }}>{` ${closingDay}`}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default PdfHeader;
function rgb(arg0: number, arg1: number, arg2: number) {
  throw new Error("Function not implemented.");
}
