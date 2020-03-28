import React from "react";
import {
  ViewPropTypes,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";
import { Colors, Layout, Styles, Fonts } from "../../constants";

import { Ionicons } from "@expo/vector-icons";
import StyledText from "../StyledText";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconContainer: {
    ...Styles.shadow.tiny,
    backgroundColor: Colors.secondaryWhite,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: Layout.margin.small
  },
  icon: {},
  title: {}
});
export default function CheckBox(props) {
  const {
    checked,
    title,
    onPress,
    containerStyle,
    titleStyle,
    iconStyle,
    iconSize,
    iconContainerStyle,
    checkedColor,
    uncheckedColor,
    uncheckedTitleColor,
    size,
    titleSize
  } = props;
  console.log("==size==", iconSize);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...containerStyle }}
    >
      <View
        style={{
          ...styles.iconContainer,
          ...{ width: size, height: size, borderColor: uncheckedColor },
          ...iconContainerStyle
        }}
      >
        {checked && (
          <Ionicons
            style={{ ...styles.icon, ...iconStyle }}
            size={iconSize}
            name={"md-checkmark"}
            color={checkedColor}
          />
        )}
      </View>
      <StyledText
        style={{
          ...styles.title,
          color: uncheckedTitleColor,
          ...titleStyle
        }}
        size={titleSize}
      >
        {title}
      </StyledText>
    </TouchableOpacity>
  );
}

CheckBox.propTypes = {
  title: PropTypes.string,
  titleSize: PropTypes.number,
  containerStyle: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
  iconStyle: ViewPropTypes.style,
  size: PropTypes.number,
  iconSize: PropTypes.number,
  checked: PropTypes.oneOf([true, false, undefined]),
  onPress: PropTypes.func,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  uncheckedTitleColor: PropTypes.string
};
CheckBox.defaultProps = {
  title: "",
  titleSize: Fonts.size.medium,
  containerStyle: {},
  iconContainerStyle: {},
  iconStyle: {},
  size: 18,
  iconSize: 16,
  checked: PropTypes.oneOf([true, false, undefined]),
  onPress: () => {},
  checkedColor: Colors.secondaryBlack,
  uncheckedColor: Colors.rgbaLightColor,
  uncheckedTitleColor: Colors.lightColor
};
