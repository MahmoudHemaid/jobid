import React, { useMemo } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Layout } from "../../constants";
import InactiveIcon from "../../assets/images/tabBar/icon_hamburger.svg";
import ActiveIcon from "../../assets/images/tabBar/icon_hamburger_active.svg";

export default function CategoriesBarButton(props) {
  const Common = useMemo(() => {
    const isActive = props.style[1].backgroundColor.startsWith("rgba");
    const backgroundColor = isActive ? Colors.white : Colors.primaryColor;
    const Icon = isActive ? ActiveIcon : InactiveIcon;

    return {
      backgroundColor,
      Icon
    };
  }, [props.style[1].backgroundColor]);

  return (
    <View style={{ marginHorizontal: Layout.margin.small }}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
        <View style={{ alignItems: "center" }}>
          <View style={[styles.backgroundCircle]} />
          <View
            style={[styles.button, { backgroundColor: Common.backgroundColor }]}
          >
            <View>
              <Common.Icon width={size / 2} height={size / 2} />
            </View>
          </View>
        </View>

        {/** Empty view to make fill the clickable area */}
        <View style={{ width: size, height: size }} />
      </TouchableOpacity>
    </View>
  );
}

const size = 54;
const offsetSize = size + 7;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    borderRadius: size / 2,
    borderRadius: size / 2,
    backgroundColor: "#7F58FF",
    marginTop: size / -2
  },
  backgroundCircle: {
    alignItems: "center",
    justifyContent: "center",
    width: offsetSize,
    height: offsetSize / 2,
    borderBottomLeftRadius: offsetSize / 2,
    borderBottomRightRadius: offsetSize / 2,
    backgroundColor: Colors.secondaryWhite,
    position: "absolute",
    marginTop: 0,
    borderWidth: 1,
    borderColor: Colors.secondaryWhite
  }
});
