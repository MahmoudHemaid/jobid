import React, { useEffect, useMemo } from "react";
import { View, StyleSheet, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import { Marker } from "react-native-maps";
import { Layout, Colors } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

const getStyles = (size) =>
  StyleSheet.create({
    container: {
      width: size * 1.4,
      height: size * 1.4,
      justifyContent: "center",
      alignItems: "center",
    },
    outerCircle: {
      backgroundColor: "rgba(68,195,221, 0.2)",
      width: size,
      height: size,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
    },
    innerCircle: {
      backgroundColor: "rgba(68,195,221, 0.34)",
      width: "60%",
      height: "60%",
      borderRadius: size * 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    markerContainer: {
      backgroundColor: "rgba(68,195,221, 1)",
      width: "70%",
      height: "70%",
      borderRadius: size * 0.35,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default CustomMarker = (props) => {
  const { zoomLevel = 2 } = props;
  const ref = React.useRef(null);
  useEffect(() => {
    ref.current.redraw();
  }, [zoomLevel]);

  const size = zoomLevel * 5;
  const iconSize = zoomLevel * 1.5;

  const styles = useMemo(() => getStyles(size), [zoomLevel]);

  return (
    <Marker
      ref={ref}
      coordinate={{
        latitude: Layout.isAndroid ? 31.5148834 : 37.785834,
        longitude: Layout.isAndroid ? 34.4518187 : -122.406417,
      }}
      tracksViewChanges={false}
      anchor={{ x: 0.5, y: 0.5 }}
    >
      <View style={styles.container}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <View style={styles.markerContainer}>
              <FontAwesome
                name="map-marker"
                size={iconSize}
                color={Colors.black}
              />
            </View>
          </View>
        </View>
      </View>
    </Marker>
  );
};
