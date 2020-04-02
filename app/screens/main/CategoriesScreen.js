import React, { useCallback, useMemo } from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import CategoriesView from "../../components/views/CategoriesView";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Screen from "../Screen";
import StyledText from "../../components/StyledText";
import { FontAwesome5 } from "@expo/vector-icons";
import HeaderView from "../../components/views/HeaderView";

export default function CategoriesScreen(props) {
  const onHomePress = useCallback(() => {
    props.navigation.navigate(SCREEN_KEYS.SELECT_ACTION);
  }, []);
  const onOptionsPress = useCallback(() => {
    __DEV__ && console.log("TODO: Options button pressed");
  }, []);
  const onCategoryPress = useCallback(category => {
    props.navigation.navigate(SCREEN_KEYS.SEARCH, { ...category });
  }, []);
  const HomeIcon = useCallback(
    () => <FontAwesome5 size={28} color={Colors.white} name={"home"} />,
    []
  );
  const RightIcon = useCallback(
    () => <FontAwesome5 size={28} color={Colors.white} name={"ellipsis-v"} />,
    []
  );
  return (
    <Screen
      containerStyle={{
        backgroundColor: Colors.primaryColor
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        {/* Background with half circle inside it */}
        <View style={styles.topBackground}>
          <View style={styles.halfCircle} />
        </View>
        {/* Header */}
        <HeaderView
          back={false}
          LeftIcon={HomeIcon}
          onLeftPress={onHomePress}
          onRightPress={onOptionsPress}
          RightIcon={RightIcon}
          title={"SELECT CATEGORY\nTO BID ON A JOB"}
          bold
        />
        <CategoriesView onCategoryPress={onCategoryPress} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray
  },
  // Top section background
  topBackground: {
    backgroundColor: Colors.primaryColor,
    width: "100%",
    height: Layout.window.height * 0.25,
    position: "absolute"
  },
  halfCircle: {
    position: "absolute",
    borderWidth: 1,
    right: 0,
    top: "20%",
    width: 50,
    height: 100,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: Colors.secondaryColor,
    borderColor: Colors.secondaryColor
  }
});
