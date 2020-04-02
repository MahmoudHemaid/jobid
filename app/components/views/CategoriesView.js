import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import Categories from "../../constants/Categories";

import CategoryButton from "../buttons/CategoryButton";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Layout.padding.small
  },
  row: {
    flexDirection: "row",
    flex: 1 / Categories.length,
    marginVertical: Layout.padding.tiny,
    width: Layout.window.content,
    alignSelf: "center"
  }
});
const Row = props => <View {...props} style={[styles.row, props.style]} />;

export default function CategoriesView(props) {
  const { onCategoryPress } = props;
  return (
    <View style={styles.container}>
      {Categories.map((raw, index) => {
        return (
          <Row key={raw[0].title + "-" + raw[1].title}>
            <CategoryButton
              left
              category={raw[0]}
              onCategoryPress={onCategoryPress}
            />
            <CategoryButton
              right
              category={raw[1]}
              onCategoryPress={onCategoryPress}
            />
          </Row>
        );
      })}
    </View>
  );
}
