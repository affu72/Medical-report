import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

import { useMyFormContext } from "../Context/MyFormContext";

import React from "react";
import { IPersonalData } from "../components/MainComponent/PersonaDetails";

const PdfPersonalDetails = () => {
  const data: IPersonalData = {
    firstName: "Afzal",
    lastName: "Nomani",
    age: 23,
    gender: "male",
    address: "Delhi",
    pin: 110025,
    city: "Delhi",
    mobile: "9368510037",
    state: "Delhi",
  };

  return (
    <View style={{ margin: 20, color: "#333333", display: "flex", gap: "4px" }}>
      <Text style={{ fontFamily: "Open", fontWeight: 900, fontSize: 14 }}>
        Id: <Text>{23545}</Text>{" "}
      </Text>

      <View>
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Name: </Text>
        <Text
          style={{ fontSize: 14, padding: 6 }}
        >{`${data.firstName} ${data.lastName}`}</Text>
      </View>

      <Text style={{ fontWeight: 700, fontSize: 14 }}>
        Id:
        <Text>{` `}</Text>{" "}
      </Text>
    </View>
  );
};

export default PdfPersonalDetails;
