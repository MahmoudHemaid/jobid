import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../../constants";
import PropTypes from "prop-types";
import StyledText from "../../../components/StyledText";
import ImageView from "react-native-image-viewing";
import { Ionicons } from "@expo/vector-icons";

const SMALL_WIDTH = Layout.window.width * 0.24;
const styles = StyleSheet.create({
  container: {},
  largeImage: {
    width: "100%",
    height: Layout.window.height * 0.25,
  },
  imagesContainer: {
    flexDirection: "row",
    marginTop: Layout.margin.normal,
  },
  smallImage: {
    width: SMALL_WIDTH,
    marginRight: Layout.margin.small,
    height: Layout.window.width * 0.2,
  },
  moreButton: {
    width: SMALL_WIDTH,
    height: Layout.window.width * 0.2,
    backgroundColor: "#35343D",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ImagesView(props) {
  const { images } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  if (!images?.length) {
    return (
      <StyledText
        color={Colors.black}
        center
        children={"There is no images to show"}
      />
    );
  }
  const LIMIT = 4;
  const isMoreVisible = images.length > LIMIT;
  const visibleImages = isMoreVisible ? LIMIT - 1 : LIMIT;
  const onImagePress = (index) => {
    setSelectedIndex(index);
    setIsVisible(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onImagePress(0)} activeOpacity={0.8}>
        <Image
          style={styles.largeImage}
          source={images[0]}
          resizeMode={"cover"}
          resizeMethod={"resize"}
        />
      </TouchableOpacity>
      <View style={images.length > 1 ? styles.imagesContainer : {}}>
        {images.slice(1, visibleImages).map((source, index) => {
          const onPress = () => {
            onImagePress(index + 1);
          };
          return (
            <TouchableOpacity
              key={"image-" + index}
              onPress={onPress}
              activeOpacity={0.8}
            >
              <Image
                style={styles.smallImage}
                source={source}
                resizeMode={"cover"}
                resizeMethod={"resize"}
              />
            </TouchableOpacity>
          );
        })}
        {isMoreVisible && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onImagePress(LIMIT - 1)}
            style={styles.moreButton}
          >
            <Ionicons
              name="md-camera"
              size={SMALL_WIDTH * 0.3}
              color={Colors.white}
            />
            <StyledText
              bold
              center
              color={Colors.white}
              children={`+${images.length - visibleImages} more`}
            />
          </TouchableOpacity>
        )}
      </View>
      <ImageView
        images={images}
        imageIndex={selectedIndex}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
}

// PropTypes.oneOf([true, false, undefined])
ImagesView.propTypes = {};

ImagesView.defaultProps = {};
