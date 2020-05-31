import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import StyledText from "../../components/StyledText";
import BackIcon from "../icons/BackIcon";
// import BackIcon from "../../assets/images/icon_back.svg";
export default function HeaderView(props) {
  const {
    LeftIcon = () => null,
    RightIcon = () => null,
    back,
    onLeftPress,
    onRightPress,
    title,
    bold,
    style,
    leftButtonStyle,
    rightButtonStyle,
    color,
  } = props;
  const RenderLeftIcon = useCallback(
    ({ color, onPress }) => {
      return back ? (
        <BackIcon
          containerStyle={{ padding: 0 }}
          onPress={onPress}
          color={color}
        />
      ) : (
        <LeftIcon />
      );
    },
    [back]
  );
  return (
    <View style={[styles.container, style]}>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity
          style={[styles.leftButton, leftButtonStyle]}
          onPress={onLeftPress}
        >
          <RenderLeftIcon onPress={onLeftPress} color={color} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <StyledText
          style={[
            styles.title,
            { fontFamily: bold ? Fonts.type.bold : Fonts.type.medium, color },
          ]}
          children={title}
        />
      </View>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity
          style={[styles.rightButton, rightButtonStyle]}
          onPress={onRightPress}
        >
          <RightIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    paddingVertical: Layout.padding.tiny,
    alignItems: "center",
  },
  leftButton: {
    padding: Layout.padding.tiny,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  titleContainer: { flex: 0.6 },
  title: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: Fonts.type.medium,
  },
  rightButton: {
    padding: Layout.padding.tiny,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
});

HeaderView.propTypes = {
  back: PropTypes.oneOf([true, false, undefined]),
  bold: PropTypes.oneOf([true, false, undefined]),
  title: PropTypes.string,
  color: PropTypes.string,
  style: ViewPropTypes.style,
  leftButtonStyle: ViewPropTypes.style,
  rightButtonStyle: ViewPropTypes.style,
  LeftIcon: PropTypes.func,
  RightIcon: PropTypes.func,
  onLeftPress: PropTypes.func,
  onRightPress: PropTypes.func,
};

HeaderView.defaultProps = {
  back: true,
  bold: false,
  title: "",
  color: Colors.white,
  style: {},
  leftButtonStyle: {},
  rightButtonStyle: {},
  LeftIcon: () => null,
  RightButton: () => null,
  onLeftPress: () => {},
  onRightPress: () => {},
};
