import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import StyledText from "../StyledText";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    borderRadius: 24,
    height: 48,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%",
  },
});

export default function MakeBidButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}
    >
      <Ionicons name="md-arrow-back" size={24} color={Colors.white} />
      <StyledText bold children={"Make a bid"} color={Colors.white} />
    </TouchableOpacity>
  );
}
