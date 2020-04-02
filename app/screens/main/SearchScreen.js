import React, { useCallback, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Keyboard } from "react-native";
import TextButton from "../../components/buttons/TextButton";
import { Colors, Layout, Fonts } from "../../constants";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Screen from "../Screen";
import { SearchTextInput } from "../../components/form/TextInput";
import { useSafeArea } from "react-native-safe-area-context";
import SubCategoryButton from "../../components/buttons/SubCategoryButton";
import HeaderView from "../../components/views/HeaderView";

export default function SearchScreen(props) {
  const insets = useSafeArea();
  const [selected, setSelected] = useState(new Set());
  const [isAllSelected, setIsAllSelected] = useState(false);
  const { title = "", subcategories = [] } = props.route.params;

  const onNextPress = useCallback(() => {
    const selectedArray = Array.from(selected);
    __DEV__ && console.log("TODO: Next button pressed");
  }, []);

  const onPress = useCallback(
    item => {
      let itemArray = [item];
      if (item.toLowerCase() == "all") {
        // If all selected will clear all selected
        // If not will select all
        setSelected(isAllSelected ? new Set() : new Set(subcategories));
        setIsAllSelected(!isAllSelected);
        return;
      }

      // If the item already selected will delete it form Set and clear itemArray
      if (selected.has(item)) {
        selected.delete(item);
        itemArray = [];
      }

      // concat itemArray with Set (The Set will converted to array before concat)
      // set selected array with the result
      const concated = new Set(itemArray.concat(Array.from(selected)));
      setSelected(concated);
      setIsAllSelected(concated.size == subcategories.length);
    },
    [selected]
  );

  return (
    <View style={{ flex: 1 }}>
      <Screen containerStyle={{ backgroundColor: Colors.primaryColor }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={insets.bottom}
        >
          <View style={styles.topSection}>
            <HeaderView
              onLeftPress={props.navigation.goBack}
              title={"SPECIFY THE CATEGORY\nOR SEARCH BY NAME"}
            />
            <SearchTextInput
              inputContainerStyle={{
                backgroundColor: Colors.searchInput
              }}
              style={{
                color: Colors.white
              }}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <View style={styles.subcategoriesSection}>
            <View>
              <SubCategoryButton
                isSelected={isAllSelected}
                item={"ALL"}
                onPress={onPress}
              />
              {subcategories.map(item => (
                <SubCategoryButton
                  key={item}
                  isSelected={selected.has(item)}
                  item={item}
                  onPress={onPress}
                />
              ))}
            </View>
          </View>
          <View style={styles.bottomSection}>
            <TextButton
              style={styles.button}
              color={Colors.secondaryColor}
              onPress={onNextPress}
              children={"Next"}
            />
          </View>
        </KeyboardAvoidingView>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flex: 0.2,
    justifyContent: "space-between"
  },
  logo: {
    alignSelf: "center"
  },
  logoSection: {
    flex: 0.5,
    justifyContent: "center"
  },
  bottomSection: {
    flex: 0.2,
    justifyContent: "center"
  },
  button: {
    marginVertical: Layout.padding.normal
  },
  subcategoriesSection: {
    flex: 0.6,
    justifyContent: "center",
    overflow: "scroll",
    marginHorizontal: Layout.margin.content,
    marginVertical: Layout.padding.small
  }
});
