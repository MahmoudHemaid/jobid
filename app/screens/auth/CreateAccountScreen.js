import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useContext
} from "react";
import { StyleSheet, View, Keyboard, Platform } from "react-native";
import StyledText from "../../components/StyledText";
import { Colors, Layout } from "../../constants";
import Screen from "../Screen";
import { SCREEN_KEYS } from "../../utilities/Constants";
import {
  ProfileImagePicker,
  PasswordTextInput,
  EmailTextInput,
  NameTextInput
} from "../../components/form";
import { ScrollView } from "react-native-gesture-handler";
import TextButton from "../../components/buttons/TextButton";
import KeyboardSpacer from "react-native-keyboard-spacer";
import Context from "../../navigation/Context";

export default function CreateAccountScreen(props) {
  const [isKeyboardShowing, setKeyboardShowing] = useState(false);
  const scrollRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);
  const { auth } = useContext(Context);

  const onSignUpPress = useCallback(() => {
    Keyboard.dismiss();
    __DEV__ && console.log("TODO: Signup button pressed");
    auth.logIn();
  }, []);
  const onLogInPress = useCallback(() => {
    Keyboard.dismiss();
    props.navigation.navigate(SCREEN_KEYS.LOG_IN);
  }, []);

  const toggleFocus = useCallback(() => {
    if (nameRef.current.isFocused()) emailRef.current.focus();
    else if (emailRef.current.isFocused()) passwordRef.current.focus();
    else if (passwordRef.current.isFocused()) cPasswordRef.current.focus();
  }, [nameRef, emailRef, passwordRef, cPasswordRef]);

  useEffect(() => {
    // componentDidMount
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShowing(true);
      scrollRef.current.scrollToEnd();
    });
    Keyboard.addListener("keyboardDidHide", () => setKeyboardShowing(false));

    return () => {
      // ComponentWillUnmount
      Keyboard.dismiss();
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  return (
    <Screen>
      <ScrollView
        ref={scrollRef}
        scrollEnabled={isKeyboardShowing}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ProfileImagePicker style={styles.imagePicker} />
          <NameTextInput
            inputRef={nameRef}
            placeholder="Name"
            returnKeyType={"next"}
            onSubmitEditing={toggleFocus}
          />
          <EmailTextInput
            inputRef={emailRef}
            placeholder="Email address"
            returnKeyType={"next"}
            onSubmitEditing={toggleFocus}
          />
          <PasswordTextInput
            inputRef={passwordRef}
            placeholder="Password"
            returnKeyType={"next"}
            onSubmitEditing={toggleFocus}
          />
          <PasswordTextInput
            inputRef={cPasswordRef}
            placeholder="Confirm password"
            returnKeyType={"done"}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>

        <TextButton onPress={onSignUpPress} style={styles.signupButton}>
          Sign up
        </TextButton>
        <View style={styles.loginContainer}>
          <StyledText color={Colors.textColor}>Already onboard?</StyledText>
          <StyledText
            bold
            touchable
            color={Colors.primaryColor}
            containerStyle={styles.loginButton}
            onPress={onLogInPress}
            children={"Log in"}
          />
        </View>

        {/* The view that will animate to match the keyboards height */}
        {Platform.OS == "ios" ? <KeyboardSpacer /> : null}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignSelf: "center",
    paddingVertical: Layout.padding.large
  },
  signupButton: {
    marginTop: Layout.margin.xxLarge
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Layout.margin.small
  },
  loginButton: {
    padding: Layout.padding.small
  }
});
