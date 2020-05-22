import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Colors, Layout, Fonts } from "../../constants";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Map from "../../components/map";
import BottomMapCard from "../../components/map/BottomMapCard";

export default function SelectActionScreen(props) {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const onMarkerPress = () => {
    setIsCardVisible(!isCardVisible);
  };
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.transparent}
      />
      <Map onMarkerPress={onMarkerPress} />
      <BottomMapCard
        isVisible={isCardVisible}
        source={{
          uri:
            "https://i.insider.com/5df126b679d7570ad2044f3e?width=1100&format=jpeg&auto=webp",
        }}
        title={"Dog Walker"}
        details={
          "Looking for someone to walk my lovely dog Gergorio today at noon! He is really cute :)"
        }
        time={"12:00pm Toady"}
        distance={"1.3 km nearby"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
