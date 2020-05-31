import React, { useState, useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Colors, Layout, Fonts } from "../../constants";
import { SCREEN_KEYS, MAP_CARD } from "../../utilities/Constants";
import Map from "../../components/map";
import BottomMapCard from "../../components/map/components/BottomMapCard";
import FilterView from "../../components/map/components/FilterView";
import { useSafeArea } from "react-native-safe-area-view";

export default function MapScreen(props) {
  const insets = useSafeArea();
  const { subcategories = [], selected = [] } = props.route?.params ?? {};
  props.navigation.setOptions({ animationEnabled: false });

  const [isCardVisible, setIsCardVisible] = useState(false);
  const onMarkerPress = () => {
    setIsCardVisible(!isCardVisible);
  };
  const onOpenFilters = () => {
    setIsCardVisible(false);
  };
  const onMakeBidPress = () => {
    props.navigation.navigate(SCREEN_KEYS.MAKE_OFFER);
  };
  const onReadMorePress = (item) => {
    props.navigation.navigate(SCREEN_KEYS.JOB_DETAILS, { item });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: isCardVisible ? "space-between" : "flex-start",
      }}
    >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.transparent}
      />
      <Map onMarkerPress={onMarkerPress} />
      <FilterView
        onOpenFilters={onOpenFilters}
        onBackPress={props.navigation.goBack}
        subcategories={subcategories}
        selected={selected}
      />
      <BottomMapCard
        isVisible={isCardVisible}
        item={MAP_CARD}
        onReadMorePress={onReadMorePress}
        onMakeBidPress={onMakeBidPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
