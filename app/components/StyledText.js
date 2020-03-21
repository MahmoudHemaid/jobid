import React from "react";
import { Text } from "react-native";
import { Fonts, Colors } from "../constants";
import PropTypes from "prop-types";

export default function StyledText(props) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: props.bold ? Fonts.bold : Fonts.regular,
          fontSize: props.size,
          color: props.color
        },
        props.style
      ]}
    />
  );
}

StyledText.propTypes = {
  bold: PropTypes.oneOf([true, false, undefined]),
  size: PropTypes.number,
  color: PropTypes.string
};

StyledText.defaultProps = {
  bold: false,
  size: Fonts.size.regular,
  color: Colors.black
};
