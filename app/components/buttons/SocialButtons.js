import React from "react";
import { ViewPropTypes, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Colors, Layout, Styles } from "../../constants";
import GoogleIcon from "../../assets/images/logo_google.svg";
import FacebookIcon from "../../assets/images/logo_facebook.svg";

const styles = StyleSheet.create({
  button: {
    width: Layout.window.width * 0.25,
    height: Layout.window.width * 0.25,
    borderRadius: Layout.window.width * 0.08,
    justifyContent: "center",
    alignItems: "center"
  }
});

const Button = props => (
  <TouchableOpacity
    {...props}
    style={[{ backgroundColor: props.color }, styles.button, props.style]}
  />
);

export function GoogleButton(props) {
  const { width, height } = props;
  return (
    <Button
      {...props}
      color={Colors.google}
      style={[Styles.shadow.medium, props.style]}
    >
      <GoogleIcon width={width} height={height} />
    </Button>
  );
}
export function FacebookButton(props) {
  const { width, height } = props;
  return (
    <Button
      {...props}
      color={Colors.facebook}
      style={[Styles.shadow.medium, props.style]}
    >
      <FacebookIcon width={width} height={height} />
    </Button>
  );
}

const defaultProps = {
  width: Layout.window.width * 0.1,
  height: Layout.window.width * 0.1,
  style: {},
  color: Colors.white
};
const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: ViewPropTypes.style,
  color: PropTypes.string
};

GoogleButton.defaultProps = defaultProps;
GoogleButton.propTypes = propTypes;

FacebookButton.defaultProps = defaultProps;
FacebookButton.propTypes = propTypes;
