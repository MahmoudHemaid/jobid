import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useSafeArea } from "react-native-safe-area-context";
import { Colors } from "../constants";
import PropTypes from "prop-types";
import CirclesBackground from "../components/views/CirclesBackground";

export default function Screen(props) {
  const insets = useSafeArea();
  return (
    <SafeAreaView
      {...props.containerProps}
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
        },
        props.containerStyle,
      ]}
    >
      <View {...props} style={[styles.contentContainer, , props.style]}>
        {props.circlesBackground && (
          <CirclesBackground style={{ top: -insets.top }} />
        )}

        {props.children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

Screen.propTypes = {
  containerProps: PropTypes.object,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  circlesBackground: PropTypes.oneOf([undefined, true, false]),
  backgroundColor: PropTypes.string,
};

Screen.defaultProps = {
  containerProps: {},
  style: {},
  containerStyle: {},
  circlesBackground: false,
  backgroundColor: Colors.secondaryWhite,
};
