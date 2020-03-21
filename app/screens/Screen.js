import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useSafeArea } from "react-native-safe-area-context";
import { Colors } from "../constants";
import PropTypes from "prop-types";

export default function Screen(props) {
  const insets = useSafeArea();
  return (
    <SafeAreaView
      {...props.containerProps}
      style={[
        styles.container,
        { paddingTop: insets.top },
        props.containerStyle
      ]}
    >
      <View {...props} style={[styles.contentContainer, props.style]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryWhite
  },
  contentContainer: {
    flex: 1
  }
});

Screen.propTypes = {
  containerProps: PropTypes.object,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style
};

Screen.defaultProps = {
  containerProps: {},
  style: {},
  containerStyle: {}
};
