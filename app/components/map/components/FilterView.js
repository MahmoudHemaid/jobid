import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../../constants";
import { SCREEN_KEYS } from "../../../utilities/Constants";
import StyledText from "../../StyledText";
import PropTypes from "prop-types";
import FilterIcon from "../../../assets/images/map/icon_filter.svg";
import { Ionicons } from "@expo/vector-icons";
import { useSafeArea } from "react-native-safe-area-view";
import Filters from "./Filters";
import BackIcon from "../../icons/BackIcon";

const SubcategoryButton = (props) => {
  const { isSelected } = props;
  const onPress = () => {
    props.onPress(props.item);
  };
  return (
    <StyledText
      touchable
      children={props.item}
      containerStyle={[
        styles.itemContainer,
        { backgroundColor: isSelected ? Colors.purple : "#F2F2F2" },
      ]}
      size={Fonts.size.large}
      color={isSelected ? Colors.white : Colors.textColor}
      onPress={onPress}
    />
  );
};

export default function FilterView(props) {
  const insets = useSafeArea();

  const { subcategories } = props;
  const [selected, setSelected] = React.useState(new Set(props.selected));
  const [isOpened, setIsOpened] = React.useState(true);
  const [filters, setFilters] = React.useState({
    distance: 5,
    isToolsRequired: false,
    date: null,
    time: null,
  });

  const onItemPress = (item) => {
    let itemArray = [item];
    if (selected.has(item)) {
      selected.delete(item);
      itemArray = [];
    }

    const concated = new Set(itemArray.concat(Array.from(selected)));
    setSelected(concated);
  };

  const renderItem = ({ item, index }) => {
    const isSelected = selected.has(item);
    return (
      <SubcategoryButton
        item={item}
        isSelected={isSelected}
        onPress={onItemPress}
      />
    );
  };

  const onSavePress = (newFilters) => {
    setFilters(newFilters);
    const { date, time, distance, isToolsRequired } = newFilters;
    const selectedSubcategories = Array.from(selected);

    setIsOpened(false);
  };

  const toggle = () => {
    if (!isOpened) {
      props.onOpenFilters();
    }
    setIsOpened(!isOpened);
  };
  const onCancelPress = () => {
    Keyboard.dismiss();
    setIsOpened(false);
  };
  return (
    <TouchableWithoutFeedback onPress={onCancelPress}>
      <View style={isOpened ? styles.container : {}}>
        <TouchableWithoutFeedback>
          <View
            style={[
              styles.headerContainer,
              {
                paddingTop: insets.top,
                backgroundColor: isOpened
                  ? Colors.lightGray
                  : Colors.transparent,
              },
            ]}
          >
            <BackIcon color={Colors.primaryColor} onPress={props.onBackPress} />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={toggle}
              style={styles.itemContainer}
            >
              <FilterIcon
                style={{ padding: 12, marginRight: Layout.margin.small }}
              />
              <StyledText
                children={"Filters"}
                color={Colors.white}
                size={Fonts.size.large}
              />
            </TouchableOpacity>
            <FlatList
              keyExtractor={(item) => "subcategory-" + item}
              data={subcategories}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </TouchableWithoutFeedback>

        <Filters
          onSavePress={onSavePress}
          onCancelPress={() => setIsOpened(false)}
          isVisible={isOpened}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

FilterView.propTypes = {
  onOpenFilters: PropTypes.func,
  onBackPress: PropTypes.func,
};
FilterView.defaultProps = {
  onOpenFilters: () => {},
  onBackPress: () => {},
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.rgbaLightColor,
  },
  headerContainer: {
    flexDirection: "row",
    paddingBottom: Layout.padding.small,
    alignItems: "center",
  },
  itemContainer: {
    ...Styles.shadow.small,
    flexDirection: "row",
    backgroundColor: Colors.purple,
    paddingVertical: Layout.padding.small,
    paddingHorizontal: Layout.padding.medium,
    borderRadius: Layout.radius.large,
    alignItems: "center",
    marginVertical: Layout.margin.medium,
    marginHorizontal: Layout.margin.small,
  },
});
