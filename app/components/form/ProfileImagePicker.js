import React, { useCallback, useMemo, useState } from "react";
import {
  ViewPropTypes,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import PropTypes from "prop-types";
import { Colors, Layout } from "../../constants";
import DefualtImage from "../../assets/images/icon_add_profile_image.png";
import * as ImagePicker from "expo-image-picker";
import StyledText from "../StyledText";
const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  image: {
    marginBottom: Layout.margin.small
  },
  text: {
    textAlign: "center"
  }
});

export default function ProfileImagePicker(props) {
  const [selected, setSelected] = useState(null);

  const openImagePickerAsync = useCallback(async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7
    });

    if (pickerResult.cancelled) return;
    setSelected(pickerResult);
    props.onImageSelected(pickerResult);
  }, []);

  const { size } = props;

  const onTextPress = useCallback(() => {
    if (!selected) {
      openImagePickerAsync();
      return;
    }

    // Remove selected image
    setSelected(null);
    props.onImageRemoved();
  }, [selected]);

  const { source, style, text } = useMemo(() => {
    return selected
      ? {
          source: selected,
          text: "Remove profile pic",
          style: { color: Colors.danger }
        }
      : {
          source: DefualtImage,
          text: "Add profile pic",
          style: { color: Colors.textColor }
        };
  }, [selected]);

  const imageStyle = useMemo(
    () => ({
      width: size,
      height: size,
      borderRadius: size / 2
    }),
    [size]
  );
  return (
    <View {...props} style={[styles.container, props.style]}>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image style={[imageStyle, styles.image]} source={source} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onTextPress}>
        <StyledText style={[style, styles.text]}>{text}</StyledText>
      </TouchableOpacity>
    </View>
  );
}

const propTypes = {
  size: PropTypes.number,
  style: ViewPropTypes.style,
  onImageSelected: PropTypes.func,
  onImageRemoved: PropTypes.func
};

const defaultProps = {
  size: Layout.window.width * 0.33,
  style: {},
  onImageSelected: () => {},
  onImageRemoved: () => {}
};

ProfileImagePicker.defaultProps = defaultProps;
ProfileImagePicker.propTypes = propTypes;
