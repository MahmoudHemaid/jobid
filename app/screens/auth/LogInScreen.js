import React, { useCallback, useState, useRef } from "react";
import { Image, StyleSheet, View, Keyboard } from "react-native";
import TextButton from "../../components/buttons/TextButton";
import { Colors, Layout, Fonts, Styles } from "../../constants";
import logo from "../../assets/images/logo_jobid_blue.png";
import StyledText from "../../components/StyledText";
import { SCREEN_KEYS } from "../../utilities/Constants";
import Screen from "../Screen";
import { PasswordTextInput, EmailTextInput } from "../../components/form";
import color_line from "../../assets/images/color_line.png";
import Checkbox from "../../components/form/Checkbox";

export default function LogInScreen(props) {
  let [errorMessage, setErrorMessage] = useState();
  let [emailFocused, setEmailFocused] = useState(false);
  let [rememberMe, setRememberMe] = useState(false);
  let [passwordFocused, setPasswordFocused] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onCreateAccountPress = useCallback(() => {
    props.navigation.navigate(SCREEN_KEYS.CREATE_ACCOUNT);
  }, []);

  const emailToggleFocus = useCallback(() => {
    setEmailFocused(!emailFocused);
  }, [emailFocused]);

  const passwordToggleFocus = useCallback(() => {
    setPasswordFocused(!passwordFocused);
  }, [passwordFocused]);

  const onCheckboxPress = useCallback(() => {
    setRememberMe(!rememberMe);
  }, [rememberMe]);

  const onSubmitEditing = useCallback(() => {
    passwordRef.current.focus();
  }, [passwordRef]);

  const onForgotPress = useCallback(() => {
    __DEV__ && console.log("TODO: Forgot password button pressed");
  }, []);

  const onLogInPress = useCallback(() => {
    __DEV__ && console.log("TODO: Log in button pressed");
  }, []);

  return (
    <Screen>
      <View style={styles.centeredSection}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.inputSection}>
        <EmailTextInput
          inputRef={emailRef}
          Icon={false}
          inputContainerStyle={styles.inputContainer}
          style={styles.inputStyle}
          placeholder={"email@email.com"}
          onFocus={emailToggleFocus}
          onBlur={emailToggleFocus}
          errorMessage={errorMessage}
          returnKeyType={"next"}
          onSubmitEditing={onSubmitEditing}
        />
        <Image
          source={emailFocused ? color_line : null}
          style={[styles.coloredLine, { opacity: emailFocused ? 1 : 0.2 }]}
        />

        <PasswordTextInput
          inputRef={passwordRef}
          Icon={false}
          inputContainerStyle={styles.inputContainer}
          placeholder={"• • • • • •"}
          style={styles.inputStyle}
          onFocus={passwordToggleFocus}
          onBlur={passwordToggleFocus}
          returnKeyType={"done"}
          onSubmitEditing={Keyboard.dismiss}
        />
        <Image
          source={passwordFocused ? color_line : null}
          style={[styles.coloredLine, { opacity: passwordFocused ? 1 : 0.2 }]}
        />
        <View style={styles.formFooter}>
          <StyledText
            touchable
            color={Colors.textColor}
            size={Fonts.size.medium}
            containerStyle={{ alignSelf: "flex-end" }}
            onPress={onForgotPress}
            children={"Forgot password?"}
          />
          <Checkbox
            checked={rememberMe}
            title={"Remember me"}
            onPress={onCheckboxPress}
            containerStyle={{ alignSelf: "flex-start" }}
          />
        </View>
      </View>
      <View style={styles.centeredSection}>
        <TextButton style={styles.button} onPress={onLogInPress}>
          Log in
        </TextButton>
        <View style={styles.createContainer}>
          <StyledText color={Colors.textColor}>Not a member?</StyledText>
          <StyledText
            touchable
            bold
            color={Colors.primaryColor}
            containerStyle={styles.createButton}
            onPress={onCreateAccountPress}
            children={"Create account"}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center"
  },
  inputSection: {
    flex: 0.5,
    justifyContent: "center"
  },
  centeredSection: {
    flex: 0.25,
    justifyContent: "center"
  },
  button: {},
  createContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Layout.margin.small
  },
  createButton: {
    padding: Layout.padding.small
  },
  inputContainer: {
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginVertical: 0,
    backgroundColor: Colors.secondaryWhite
  },
  inputStyle: {
    paddingHorizontal: 0,
    paddingVertical: Layout.padding.tiny,
    fontSize: Fonts.size.regular
  },
  coloredLine: {
    width: Layout.window.content,
    height: 3,
    alignSelf: "center",
    backgroundColor: Colors.lightColor
  },
  formFooter: {
    marginHorizontal: Layout.margin.content,
    paddingVertical: Layout.padding.small
  }
});
