import React from "react";
import { StatusBar, View } from "react-native";
import { Colors } from "../constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./AppNavigation";

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </View>
  );
};
