import React, { useCallback } from "react";
import { Image, StyleSheet, View, StatusBar } from "react-native";
import { Colors, Layout, Fonts } from "../../constants";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Screen from "../Screen";
import Map from "../../components/map";

export default function SelectActionScreen(props) {
  const onBidPress = useCallback(() => {
    props.navigation.navigate(SCREEN_KEYS.MAIN_STACK);
  }, []);

  const onPostPress = useCallback(() => {
    __DEV__ && console.log("TODO: Post button pressed");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.transparent}
      />
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({});
