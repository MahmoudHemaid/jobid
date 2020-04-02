import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREEN_KEYS } from "../../utilities/Constants";
import { Colors } from "../../constants";
import {
  MessagesIcon,
  ProfileIcon,
  WalletIcon,
  BidsIcon
} from "../../components/icons/TabBarIcons";
import styles from "../styles/NavigationStyles";
import CategoriesBarButton from "../../components/buttons/CategoriesBarButton";
import { Screen, CategoriesScreen } from "../../screens";

const TabNavigator = createBottomTabNavigator();
export default MainTabBarNavigator = () => (
  <TabNavigator.Navigator
    initialRouteName={SCREEN_KEYS.CATEGORIES}
    tabBarOptions={{
      style: styles.tabBar,
      inactiveBackgroundColor: Colors.transparent,
      activeTintColor: Colors.primaryColor
    }}
  >
    <TabNavigator.Screen
      name="PROFILE"
      component={Screen}
      options={{
        tabBarIcon: ProfileIcon
      }}
    />
    <TabNavigator.Screen
      name="WALLET"
      component={Screen}
      options={{
        tabBarIcon: WalletIcon
      }}
    />
    <TabNavigator.Screen
      name={SCREEN_KEYS.CATEGORIES}
      component={CategoriesScreen}
      options={{
        tabBarButton: props => <CategoriesBarButton {...props} />
      }}
    />
    <TabNavigator.Screen
      name={"MY BIDS"}
      component={Screen}
      options={{
        tabBarIcon: BidsIcon
      }}
    />
    <TabNavigator.Screen
      name={"MESSAGES"}
      component={Screen}
      options={{
        tabBarIcon: MessagesIcon
      }}
    />
  </TabNavigator.Navigator>
);
