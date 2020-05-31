import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../../constants";
import { SCREEN_KEYS } from "../../../utilities/Constants";
import StyledText from "../../StyledText";
import PropTypes from "prop-types";
import DistanceSlider from "./DistanceSlider";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const DateField = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={{ flexDirection: "row" }}
  >
    <View value={props.value} style={[styles.input, { alignItems: "center" }]}>
      <StyledText center children={props.value} />
    </View>
    <View style={styles.iconContainer}>
      <Ionicons name={props.icon} size={24} color={Colors.white} />
    </View>
  </TouchableOpacity>
);
export default function Filters(props) {
  const { isVisible, onCancelPress } = props;
  const [distance, setDistance] = useState(5);
  const [isToolsRequired, setIsToolsRequired] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  if (!isVisible) return null;
  const onDatePress = () => {
    setPickerMode("date");
    setIsPickerVisible(true);
  };
  const onTimePress = () => {
    setPickerMode("time");
    setIsPickerVisible(true);
  };
  const onPickerConfirm = (date) => {
    if (pickerMode == "date") {
      setDate(date);
    } else {
      setTime(date);
    }
    setIsPickerVisible(false);
  };
  const onPickerCancel = () => {
    setIsPickerVisible(false);
  };
  const onSavePress = () => {
    props.onSavePress({ date, time, distance, isToolsRequired });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topButtonsContainer}>
          <StyledText
            touchable
            style={styles.topButton}
            onPress={onCancelPress}
            children={"CANCEL"}
          />
          <StyledText
            touchable
            style={styles.topButton}
            onPress={onSavePress}
            children={"SAVE"}
          />
        </View>
        <StyledText style={styles.title} children={"How far from you?"} />
        <DistanceSlider value={distance} onChangeValue={setDistance} />
        <StyledText style={styles.title} children={"By Postal Code"} />
        <TextInput
          textContentType={"postalCode"}
          autoCompleteType={"postal-code"}
          // keyboardType={"number-pad"}
          style={styles.input}
          autoCorrect={false}
          blurOnSubmit={true}
          returnKeyType={"done"}
        />
        <View style={{ alignSelf: "flex-start" }}>
          <StyledText style={styles.title} children={"Are tools required?"} />
          <View style={styles.buttonsContainer}>
            <StyledText
              touchable
              onPress={() => setIsToolsRequired(true)}
              color={isToolsRequired ? Colors.purple : Colors.lightColor}
              style={styles.boolenButton}
              children={"Yes"}
            />
            <StyledText
              touchable
              onPress={() => setIsToolsRequired(false)}
              color={isToolsRequired ? Colors.lightColor : Colors.purple}
              style={styles.boolenButton}
              children={"No"}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <StyledText style={styles.title} children={"Date needed"} />
            <DateField
              icon={"ios-calendar"}
              value={date ? moment(date).format("YYYY-MM-DD") : ""}
              onPress={onDatePress}
            />
          </View>
          <View style={{ marginLeft: Layout.margin.xLarge }}>
            <StyledText style={styles.title} children={"Time needed"} />
            <DateField
              icon={"md-time"}
              value={time ? moment(time).format("hh:mm A") : ""}
              onPress={onTimePress}
            />
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode={pickerMode}
          value={(pickerMode == "date" ? date : time) || new Date()}
          onConfirm={onPickerConfirm}
          onCancel={onPickerCancel}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

Filters.propTypes = {
  isVisible: PropTypes.oneOf([true, false, undefined]),
  onSavePress: PropTypes.func,
  onCancelPress: PropTypes.func,
};
Filters.defaultProps = {
  isVisible: false,
  onSavePress: () => {},
  onCancelPress: () => {},
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryWhite,
    padding: Layout.padding.normal,
  },
  topButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topButton: {
    paddingVertical: Layout.padding.small,
  },
  title: {
    fontFamily: Fonts.medium,
    color: Colors.lightColor,
    marginTop: Layout.margin.normal,
    marginBottom: Layout.margin.small,
  },
  boolenButton: {
    fontFamily: Fonts.bold,
    padding: Layout.padding.small,
    paddingHorizontal: Layout.padding.normal,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: Colors.lightColor,
    width: 124,
    paddingHorizontal: Layout.padding.medium,
    justifyContent: "center",
    height: 42,
  },
  iconContainer: {
    width: 42,
    height: 42,
    backgroundColor: Colors.purple,
    borderWidth: 0.5,
    borderColor: Colors.purple,
    justifyContent: "center",
    alignItems: "center",
  },
});
