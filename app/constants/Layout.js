import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
    content: width * 0.8
  },
  isSmallDevice: width < 375,
  margin: {
    tiny: 4,
    small: 8,
    medium: 12,
    normal: 16,
    large: 24,
    xLarge: 36,
    xxLarge: 76,
    content: width * 0.1
  },
  padding: {
    tiny: 4,
    small: 8,
    medium: 12,
    normal: 16,
    large: 24,
    xLarge: 36,
    content: width * 0.1
  },
  radius: {
    tiny: 2,
    small: 3,
    medium: 4,
    normal: 5,
    large: 8,
    xLarge: 12,
    round: 50
  },
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  icons: {},
  images: {}
};
