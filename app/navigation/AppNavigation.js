import React, { useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_KEYS } from "../utilities/Constants";
import { Colors } from "../constants";
import Context from "./Context";
import styles from "./styles/NavigationStyles";
import { MainTabBarNavigator } from "./stacks";
// eslint-disable-next-line no-unused-vars
import {
  GetStartedScreen,
  CreateAccountScreen,
  LogInScreen,
  SelectActionScreen,
  SearchScreen,
  JobDetailsScreen,
  MakeOfferScreen,
} from "../screens";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
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
    <AuthStack.Screen name={SCREEN_KEYS.LOG_IN} component={LogInScreen} />
  </AuthStack.Navigator>
);

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator
    initialRouteName={SCREEN_KEYS.SELECT_ACTION}
    screenOptions={{ headerShown: false }}
  >
    <AppStack.Screen
      name={SCREEN_KEYS.SELECT_ACTION}
      component={SelectActionScreen}
    />
    <AppStack.Screen
      name={SCREEN_KEYS.MAIN_STACK}
      component={MainTabBarNavigator}
      options={{ gestureEnabled: false }}
    />
    <AppStack.Screen name={SCREEN_KEYS.SEARCH} component={SearchScreen} />
    <AppStack.Screen
      name={SCREEN_KEYS.JOB_DETAILS}
      component={JobDetailsScreen}
    />
    <AppStack.Screen
      name={SCREEN_KEYS.MAKE_OFFER}
      component={MakeOfferScreen}
    />
  </AppStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ isLogged }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {isLogged ? (
      <RootStack.Screen name={"App"} component={AppStackScreen} />
    ) : (
      <RootStack.Screen name={"Auth"} component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLogged, setIsLogged] = useState(false);
  const context = useMemo(() => {
    return {
      auth: {
        logIn: () => {
          setIsLogged(true);
        },
        logOut: () => {
          setIsLogged(false);
        },
      },
    };
  }, []);
  return (
    <Context.Provider value={context}>
      <NavigationContainer>
        <RootStackScreen isLogged={isLogged} />
      </NavigationContainer>
    </Context.Provider>
  );
};
