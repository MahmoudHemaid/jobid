import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../constants";
import PropTypes from "prop-types";
import StyledText from "../StyledText";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    paddingVertical: Layout.padding.medium,
    paddingHorizontal: Layout.padding.large,
    justifyContent: "space-between",
  },
  headerTitle: {
    flex: 0.6,
  },
  headerRightContainer: {
    flex: 0.2,
    alignItems: "flex-end",
  },
});

export default function Section(props) {
  const [isOpened, setIsOpened] = useState(true);
  const onHeaderPress = () => {
    setIsOpened(!isOpened);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onHeaderPress}
        activeOpacity={0.8}
        style={styles.headerContainer}
      >
        <View style={{ flex: 0.2 }} />
        <StyledText
          bold
          center
          size={Fonts.size.large}
          style={styles.headerTitle}
          children={props.title}
        />
        <View style={styles.headerRightContainer}>
          <Ionicons
            name={isOpened ? "ios-arrow-down" : "ios-arrow-forward"}
            size={24}
            color={Colors.primaryColor}
          />
        </View>
      </TouchableOpacity>
      <View style={{ padding: Layout.padding.normal }}>
        {isOpened ? props.children : undefined}
      </View>
    </View>
  );
}

// PropTypes.oneOf([true, false, undefined])
Section.propTypes = {};

Section.defaultProps = {};
