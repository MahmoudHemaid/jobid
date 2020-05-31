import React from "react";
import {
  View,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
} from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../constants";
import PropTypes from "prop-types";
import HexagonImage from "../images/HexagonImage";
import StyledText from "../StyledText";
import { AirbnbRating } from "react-native-ratings";

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function PersonWithRating(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
        disabled={!props.touchable}
        style={{ alignSelf: "center" }}
      >
        <HexagonImage size={props.imageSize} source={props.source} />
      </TouchableOpacity>
      <View style={{ marginVertical: Layout.margin.normal }}>
        <StyledText
          bold
          center
          touchable
          onPress={props.onPress}
          size={props.nameSize}
          children={"Mahmoud Hemaid"}
        />
        <View style={styles.ratingContainer}>
          <AirbnbRating
            isDisabled
            showRating={false}
            count={5}
            defaultRating={props.rating}
            size={props.starSize}
          />
          <StyledText
            size={props.starSize}
            color={Colors.lightColor}
            children={props.rating + "/5.0"}
            style={{ marginLeft: Layout.margin.medium }}
          />
        </View>
      </View>
    </View>
  );
}

// PropTypes.oneOf([true, false, undefined])
PersonWithRating.propTypes = {
  touchable: PropTypes.oneOf([true, false, undefined]),
  onPress: PropTypes.func,
  name: PropTypes.string,
  rating: PropTypes.number,
  nameSize: PropTypes.number,
  starSize: PropTypes.number,
  imageSize: PropTypes.number,
  style: ViewPropTypes.style,
};

PersonWithRating.defaultProps = {
  touchable: false,
  onPress: () => {},
  name: "",
  rating: 0,
  starSize: Fonts.size.small,
  nameSize: Fonts.size.regular,
  imageSize: Layout.window.width * 0.15,
  style: {},
};
