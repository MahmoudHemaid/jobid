import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import StyledText from "../StyledText";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Layout.padding.medium
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: Layout.margin.large
  }
});

export default class SubCategoryButton extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.isSelected !== this.props.isSelected;
  }
  onPress = () => {
    this.props.onPress(this.props.item);
  };
  render() {
    const { item, isSelected } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        {...this.props}
        onPress={this.onPress}
      >
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isSelected ? Colors.yallow : Colors.gray
            }
          ]}
        />
        <StyledText
          color={Colors.white}
          size={Fonts.size.h2}
          style={{ fontFamily: Fonts.type.medium }}
        >
          {item}
        </StyledText>
      </TouchableOpacity>
    );
  }
}
