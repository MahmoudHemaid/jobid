import React from "react";
import { Image, StyleSheet } from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../constants";
import PropTypes from "prop-types";
import Background from "../../assets/images/piece_circles.png";

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: Layout.window.width,
    height: Layout.window.height,
    opacity: 0.2,
  },
});

export default function CirclesBackground(props) {
  return (
    <Image
      style={[styles.image, props.style]}
      source={Background}
      resizeMode={"repeat"}
    />
  );
}

// PropTypes.oneOf([true, false, undefined])
CirclesBackground.propTypes = {};

CirclesBackground.defaultProps = {};
