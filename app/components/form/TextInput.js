import React from "react";
import { ViewPropTypes, StyleSheet, TextInput, View } from "react-native";
import StyledText from "../StyledText";
import PropTypes from "prop-types";
import { Colors, Layout, Fonts, Styles } from "../../constants";

import PersonIcon from "../../assets/images/icon_person_outline.svg";
import EmailIcon from "../../assets/images/icon_mail_outline.svg";
import LockIcon from "../../assets/images/icon_lock_outline.svg";

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    ...Styles.shadow.small,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Layout.radius.round,
    backgroundColor: Colors.input,
    paddingHorizontal: Layout.padding.normal,
    flexDirection: "row",
    alignItems: "center"
  },
  error: {
    marginHorizontal: "10%"
  },
  input: {
    flex: 1,
    padding: Layout.padding.normal,
    color: Colors.secondaryBlack
  }
});

export const INPUT_TYPE = {
  name: 0,
  email: 1,
  password: 2
};

function FormTextInput(props) {
  const {
    containerStyle,
    inputContainerStyle,
    style,
    Icon,
    iconSize,
    errorMessage,
    inputRef,
    showBottomBar = false
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <StyledText style={[Styles.text.error, styles.error]}>
        {errorMessage || " "}
      </StyledText>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {Icon && <Icon width={iconSize} height={iconSize} />}
        <TextInput
          {...props}
          ref={inputRef}
          placeholderTextColor={Colors.textColor}
          style={[styles.input, style]}
          autoCorrect={false}
          autoCapitalize="words"
          blurOnSubmit={false}
        />
      </View>
    </View>
  );
}
export function NameTextInput(props) {
  return (
    <FormTextInput
      autoCapitalize="words"
      autoCompleteType="name"
      textContentType="name"
      input_type={INPUT_TYPE.name}
      Icon={PersonIcon}
      {...props}
    />
  );
}
export function EmailTextInput(props) {
  return (
    <FormTextInput
      autoCapitalize="none"
      autoCompleteType="email"
      textContentType="emailAddress"
      keyboardType="email-address"
      input_type={INPUT_TYPE.email}
      Icon={EmailIcon}
      {...props}
    />
  );
}
export function PasswordTextInput(props) {
  return (
    <FormTextInput
      autoCapitalize="none"
      autoCompleteType="password"
      textContentType="password"
      input_type={INPUT_TYPE.password}
      Icon={LockIcon}
      secureTextEntry={true}
      {...props}
    />
  );
}
const propTypes = {
  containerStyle: ViewPropTypes.style,
  iconSize: PropTypes.number,
  errorMessage: PropTypes.string
};
const defaultProps = {
  containerStyle: {},
  iconSize: 18,
  errorMessage: " "
};

NameTextInput.propTypes = propTypes;
NameTextInput.defaultProps = defaultProps;
EmailTextInput.propTypes = propTypes;
EmailTextInput.defaultProps = defaultProps;
PasswordTextInput.propTypes = propTypes;
PasswordTextInput.defaultProps = defaultProps;
