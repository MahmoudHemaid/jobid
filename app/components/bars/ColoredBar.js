import React from "react";
import { View, ViewPropTypes } from "react-native";
import { Fonts, Colors } from "../../constants";
import PropTypes from "prop-types";

export default function ColordBar(props) {
  const { width = "100%", height = 8, style } = props;
  return (
    <View
      {...props}
      style={[
        {
          width,
          height,
          flexDirection: "row"
        },
        style
      ]}
    >
      {Colors.colors.map((color, index) => (
        <View
          key={"color-" + index}
          style={{ flex: 1, backgroundColor: color }}
        />
      ))}
    </View>
  );
}
ColordBar.propTypes = {
  style: ViewPropTypes.style
};

ColordBar.defaultProps = {
  style: {}
};
