import React from "react";
import { View, ViewPropTypes } from "react-native";
import { Fonts, Colors, Layout } from "../../constants";
import PropTypes from "prop-types";

export default function ColordBar(props) {
  const { width = "100%", height = 8, top, style, ...rest } = props;
  return (
    <View
      {...rest}
      style={[
        {
          width,
          height,
          flexDirection: "row",
        },
        style,
      ]}
    >
      {Colors?.colors?.map((color, index) => (
        <View
          key={"color-" + index}
          style={{
            flex: 1,
            backgroundColor: color,
            borderTopLeftRadius: index == 0 && top ? Layout.radius.xxLarge : 0,
            borderTopRightRadius:
              index == Colors.colors.length - 1 && top
                ? Layout.radius.xxLarge
                : 0,
          }}
        />
      ))}
    </View>
  );
}
ColordBar.propTypes = {
  style: ViewPropTypes.style,
  top: PropTypes.oneOf([true, false, undefined]),
};

ColordBar.defaultProps = {
  style: {},
  top: false,
};
