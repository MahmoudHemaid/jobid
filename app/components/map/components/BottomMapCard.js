import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Colors, Layout, Fonts } from "../../../constants";
import { SCREEN_KEYS } from "../../../utilities/Constants";
import StyledText from "../../StyledText";
import HexagonImage from "../../images/HexagonImage";
import ClockIcon from "../../../assets/images/map/icon_clock.svg";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import MakeBidButton from "../../buttons/MakeBidButton";

export default function BottomMapCard(props) {
  const { isVisible, item } = props;
  const { uri, title, details, time, distance } = item || {};
  if (!isVisible) return null;
  const onReadMorePress = () => {
    props.onReadMorePress(item);
  };
  const onMakeBidPress = () => {
    props.onMakeBidPress(item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <HexagonImage
          size={Layout.window.width * 0.2}
          style={{
            top: Layout.window.width * -0.2,
          }}
          source={{ uri }}
        />
      </View>
      <View style={styles.topIconsContainer}>
        <View style={styles.iconContainer}>
          <ClockIcon style={styles.clockIcon} />
          <StyledText
            center
            children={time}
            size={Fonts.size.small}
            color={Colors.orange}
          />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.locationIconContainer}>
            <Ionicons
              name="md-pin"
              size={18}
              color={Colors.white}
              style={{ top: 1 }}
            />
          </View>
          <StyledText
            center
            children={distance}
            size={Fonts.size.small}
            color={Colors.orange}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <StyledText
          center
          bold
          children={title}
          color={Colors.secondaryBlack}
          style={styles.title}
          size={24}
        />
        <StyledText style={Fonts.style.description} children={details} />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <StyledText
          bold
          touchable
          onPress={onReadMorePress}
          style={styles.readMoreButton}
          children={"READ MORE"}
          color={Colors.lightColor}
        />
        <MakeBidButton onPress={onMakeBidPress} />
      </View>
    </View>
  );
}

BottomMapCard.propTypes = {
  isVisible: PropTypes.oneOf([true, false, undefined]),
  title: PropTypes.string,
  details: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  onReadMorePress: PropTypes.func,
  onMakeBidPress: PropTypes.func,
};
BottomMapCard.defaultProps = {
  isVisible: false,
  title: "",
  details: "",
  time: "",
  distance: "",
  onReadMorePress: () => {},
  onMakeBidPress: () => {},
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Layout.radius.xxxLarge,
    borderTopRightRadius: Layout.radius.xxxLarge,
    paddingBottom: Layout.padding.xLarge,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  topIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: Layout.window.width * 0.2,
  },
  iconContainer: {
    width: "30%",
    alignItems: "center",
  },
  clockIcon: {
    padding: 12,
    marginBottom: Layout.margin.small,
  },
  locationIconContainer: {
    borderRadius: 12,
    width: 24,
    height: 24,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Layout.margin.small,
  },
  textContainer: {
    marginHorizontal: Layout.margin.content,
    alignItems: "center",
  },
  title: {
    ...Fonts.style.title,
    paddingVertical: Layout.padding.medium,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Layout.margin.large,
  },
  readMoreButton: {
    paddingVertical: Layout.padding.normal,
    paddingHorizontal: Layout.padding.large,
  },
});
