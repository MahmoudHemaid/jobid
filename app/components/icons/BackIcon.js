import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { Layout } from "../../constants";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function BackIcon(props) {
  return (
    <TouchableOpacity
      style={[
        { padding: Layout.padding.medium, paddingRight: Layout.padding.small },
        props.containerStyle,
      ]}
      onPress={props.onPress}
    >
      <Svg
        id="prefix__Capa_1"
        data-name="Capa 1"
        viewBox="0 0 20.84 15.46"
        width={20.84}
        height={15.46}
        {...props}
        style={[{ padding: 14 }, props.style]}
      >
        <Defs></Defs>
        <G id="prefix__Group_2" data-name="Group 2">
          <G id="prefix__Group">
            <Path
              id="prefix__Path_3"
              data-name="Path 3"
              fill={"none"}
              stroke={props.color || "#FFF"}
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M20.84 7.73H2.09"
            />
            <Path
              id="prefix__Path_4"
              data-name="Path 4"
              fill={"none"}
              stroke={props.color || "#FFF"}
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M9 14.73l-7.5-7 7.5-7"
            />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
}

export default BackIcon;
