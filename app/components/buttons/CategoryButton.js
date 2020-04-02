import React, { useCallback, useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import StyledText from "../StyledText";

const styles = StyleSheet.create({
  container: {
    ...Styles.shadow.tiny,
    backgroundColor: Colors.white,
    flex: 0.5,
    marginHorizontal: Layout.margin.tiny,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: Layout.radius.xLarge
  },
  left: {
    marginLeft: 0
  },
  right: {
    marginRight: 0
  }
});

export default function CategoryButton(props) {
  const { left, category, onCategoryPress } = props;

  const { Icon = () => null, title = "" } = category;
  const [isPressed, setIsPressed] = useState(false);
  const onPress = useCallback(() => {
    onCategoryPress(category);
  }, []);
  const onShow = useCallback(() => {
    setIsPressed(true);
  }, []);
  const onHide = useCallback(() => {
    setIsPressed(false);
  }, []);
  return (
    <TouchableHighlight
      style={[styles.container, left ? styles.left : styles.right]}
      underlayColor={Colors.underlayColor}
      onPress={onPress}
      onShowUnderlay={onShow}
      onHideUnderlay={onHide}
    >
      <>
        <Icon
          color={isPressed ? Colors.white : Colors.categoryColor}
          width={Layout.window.width * 0.18}
          height={Layout.window.width * 0.18 * 0.66}
        />
        <StyledText
          style={{ textAlign: "center", fontSize: Fonts.size.h5 }}
          color={isPressed ? Colors.white : Colors.categoryColor}
          children={title.toUpperCase()}
        />
      </>
    </TouchableHighlight>
  );
}
