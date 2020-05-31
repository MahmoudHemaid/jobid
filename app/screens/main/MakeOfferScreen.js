import React, { useState } from "react";
import { StyleSheet, View, TextInput, StatusBar } from "react-native";
import TextButton from "../../components/buttons/TextButton";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import ColoredCard from "../../components/cards/ColoredCard";
import { SCREEN_KEYS } from "../../utilities/Constants";
import StyledText from "../../components/StyledText";
import Screen from "../Screen";

export default function SelectActionScreen(props) {
  const [offer, setOffer] = useState("20");
  return (
    <Screen circlesBackground>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.black} />

      <ColoredCard style={styles.cardContainer}>
        <StyledText
          center
          bold
          color={Colors.primaryColor}
          children={"MY JOB OFFER IS"}
          size={Fonts.size.large}
        />
        <View style={styles.offerInputContainer}>
          <StyledText style={styles.text} children={"$"} />
          <TextInput
            autoFocus={true}
            onChangeText={setOffer}
            value={offer}
            placeholder={"0 "}
            maxLength={6}
            numberOfLines={1}
            keyboardType={"number-pad"}
            style={styles.text}
          />
          <StyledText style={styles.text} children={".00"} />
        </View>
        <TextButton
          style={{ ...Styles.shadow.normal, width: "80%" }}
          children={"Confirm"}
        />
      </ColoredCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xxLarge,
    color: Colors.primaryColor,
  },
  offerInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
