import React from "react";
import {
  View,
  StyleSheet,
  ViewPropTypes,
  KeyboardAvoidingView,
} from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../constants";
import PropTypes from "prop-types";
import ColoredBar from "../bars/ColoredBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Layout.margin.content,
    borderRadius: Layout.radius.large,
    paddingTop: "25%",
  },
  contentContainer: {
    ...Styles.shadow.small,
    flex: 0.8,
    borderBottomLeftRadius: Layout.radius.xxLarge,
    borderBottomRightRadius: Layout.radius.xxLarge,
    backgroundColor: Colors.lightGray,
  },
});

export default function ColoredCard(props) {
  return (
    <View style={styles.container}>
      <ColoredBar top height={12} />
      <KeyboardAvoidingView
        enabled={Layout.isIOS}
        behavior={"padding"}
        style={{ flex: 1 }}
      >
        <View style={[styles.contentContainer, props.style]}>
          {props.children}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

// PropTypes.oneOf([true, false, undefined])
ColoredCard.propTypes = {
  style: ViewPropTypes.style,
};

ColoredCard.defaultProps = {
  style: {},
};
