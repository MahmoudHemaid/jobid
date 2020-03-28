import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import TextButton from "../../components/buttons/TextButton";
import { Colors, Layout, Fonts } from "../../constants";
import logo from "../../assets/images/logo_jobid_blue.png";
import StyledText from "../../components/StyledText";
import { GoogleButton, FacebookButton } from "../../components/buttons/SocialButtons";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Screen from "../Screen";

export default function GetSartedScreen(props) {
  const onFacebookPress = useCallback(() => {
    __DEV__ && console.log("TODO: Facebook button pressed");
  }, []);

  const onGooglePress = useCallback(() => {
    __DEV__ && console.log("TODO: Google button pressed");
  }, []);

  const onCreateAccountPress = useCallback(() => {
    props.navigation.navigate(SCREEN_KEYS.CREATE_ACCOUNT);
  }, []);

  const onLogInPress = useCallback(() => {
    __DEV__ && console.log("TODO: Log in button pressed");
  }, []);

  return (
    <Screen>
      <View style={styles.section}>
        <View style={styles.centeredSection}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.centeredSection}>
          <StyledText style={styles.getStartedText}>
            Get started with
          </StyledText>
          <View style={styles.socialContainer}>
            <FacebookButton onPress={onFacebookPress} />
            <GoogleButton onPress={onGooglePress} />
          </View>
        </View>
      </View>
      <View style={styles.centeredSection}>
        <TextButton
          style={styles.button}
          color={Colors.secondaryColor}
          onPress={onCreateAccountPress}
        >
          Create account
        </TextButton>
        <TextButton style={styles.button} onPress={onLogInPress}>
          Log in
        </TextButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center"
  },
  section: {
    flex: 0.5
  },
  centeredSection: {
    flex: 0.5,
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
