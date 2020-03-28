import React from "react";
import { ViewPropTypes, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../StyledText";
import PropTypes from "prop-types";
import { Colors, Layout, Fonts, Styles } from "../../constants";
const styles = StyleSheet.create({
  button: {
    ...Styles.shadow.small,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Layout.radius.round,
    padding: Layout.padding.normal
  },
  buttonText: {
    ...Fonts.style.h3
  }
});

export default function TextButton(props) {
  const { color, textColor, style, textStyle, textProps, children } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[{ backgroundColor: color }, styles.button, style]}
    >
      <StyledText
        {...textProps}
        style={[{ color: textColor }, styles.buttonText, textStyle]}
      >
        {children}
      </StyledText>
    </TouchableOpacity>
  );
}

TextButton.propTypes = {
  textProps: PropTypes.object,
  style: ViewPropTypes.style,
  color: PropTypes.string,
  textColor: PropTypes.string
};

TextButton.defaultProps = {
  textProps: {},
  style: {},
  textStyle: {},
  color: Colors.primaryColor,
  textColor: Colors.white
};
