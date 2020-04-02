import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import TextButton from "../../components/buttons/TextButton";
import { Colors, Layout, Fonts } from "../../constants";
import logo from "../../assets/images/logo_jobid.png";
import ColoredBar from "../../components/bars/ColoredBar";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Screen from "../Screen";

export default function SelectActionScreen(props) {
  const onBidPress = useCallback(() => {
    props.navigation.navigate(SCREEN_KEYS.MAIN_STACK);
  }, []);

  const onPostPress = useCallback(() => {
    __DEV__ && console.log("TODO: Post button pressed");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Screen containerStyle={{ backgroundColor: Colors.primaryColor }}>
        <View style={styles.logoSection}>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.buttonsSection}>
          <TextButton
            style={styles.button}
            color={Colors.subColor}
            textColor={Colors.primaryColor}
            onPress={onBidPress}
            children={"Bid on a job"}
          />
          <TextButton
            style={styles.button}
            color={Colors.secondaryColor}
            textColor={Colors.primaryColor}
            onPress={onPostPress}
            children={"Post a job"}
          />
        </View>
      </Screen>
      <ColoredBar />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center"
  },
  logoSection: {
    flex: 0.5,
    justifyContent: "center"
  },
  buttonsSection: {
    justifyContent: "center"
  },
  getStartedText: {
    fontSize: Fonts.size.large,
    marginBottom: Layout.margin.large,
    textAlign: "center"
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: Layout.padding.large
  },
  button: {
    marginVertical: Layout.padding.normal
  }
});
