import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "2px solid red",
  },
  heading: {
    fontWeight: "semibold",
    color: "#333333",
  },

  text: {
    fontSize: 12,
    color: `#333333`,
  },
  logo: {
    width: "90px",
    height: "90px",
    borderRadius: "90",
  },
});
