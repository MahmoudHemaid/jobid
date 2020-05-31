import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import { Colors, Layout, Fonts, Styles } from "../../../constants";
import StyledText from "../../StyledText";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const SliderMarker = (props) => {
  return (
    <View style={styles.markerContainer}>
      <StyledText center children={props.currentValue + " KM"} />
    </View>
  );
};

export default function Slider({ containerStyle, value, ...props }) {
  const onValuesChange = (values) => {
    props.onChangeValue(values[0]);
  };
  return (
    <MultiSlider
      values={[value]}
      touchDimensions={{ width: 60 }}
      onValuesChange={onValuesChange}
      sliderLength={Layout.window.width - Layout.padding.normal * 2}
      containerStyle={{ ...containerStyle, alignItems: "center" }}
      customMarker={SliderMarker}
      selectedStyle={{ backgroundColor: Colors.secondaryColor }}
      min={1}
      max={10}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  markerContainer: {
    ...Styles.shadow.tiny,
    borderRadius: Layout.radius.normal,
    backgroundColor: Colors.white,
    paddingVertical: Layout.padding.small,
    alignItems: "center",
    width: 60,
  },
});

Slider.propTypes = {
  containerStyle: ViewPropTypes.style,
  onChangeValue: PropTypes.func,
  value: PropTypes.number,
};

Slider.defaultProps = {
  back: true,
  containerStyle: {},
  onChangeValue: () => {},
  value: 5,
};
