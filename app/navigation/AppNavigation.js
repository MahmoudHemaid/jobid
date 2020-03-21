import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_KEYS } from "../utilities/Constants";
import styles from "./styles/NavigationStyles";
// eslint-disable-next-line no-unused-vars
import { GetStartedScreen, CreateAccountScreen } from "../screens";

const AuthStack = createStackNavigator();

const AuthStackCreen = () => (
  <AuthStack.Navigator
    initialRouteName={SCREEN_KEYS.GET_STARTED}
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen
      name={SCREEN_KEYS.GET_STARTED}
      component={GetStartedScreen}
    />
    <AuthStack.Screen
      name={SCREEN_KEYS.CREATE_ACCOUNT}
      component={CreateAccountScreen}
    />
  </AuthStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AuthStackCreen />
  </NavigationContainer>
);
