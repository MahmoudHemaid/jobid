import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  StyleSheet,
  ViewPropTypes,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapStyle from "./MapStyle.json";
import * as Location from "expo-location";
import { Layout } from "../../constants";
import CustomMarker from "./CustomMarker";
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const ASPECT_RATIO = Layout.window.width / Layout.window.height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map(props) {
  const ref = useRef(null);
  const [location, setLocation] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(16);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Location permission denied",
          "Allow location permission to access your location"
        );
        return;
      }

      let { coords, timestamp } = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = coords;
      const camera = {
        center: {
          latitude,
          longitude,
        },
        zoom: 16,
      };

      //   ref.current.setCamera(camera);

      ref.current.animateToRegion({
        // latitude,
        // longitude,
        latitude: 37.785834,
        longitude: -122.406417,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
      setLocation(location);
    })();
  }, []);
  const onRegionChange = useCallback(
    async (region) => {
      // There is an issue on android so to skip the issue, I'll calculate the zoom level using the region
      // const { zoom, pitch, center, heading } = await ref.current.getCamera();
      let zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
      const difference = zoomLevel - zoom;
      if (difference >= 2 || difference <= -2) {
        setZoomLevel(zoom);
      }
    },
    [ref.current]
  );
  return (
    <View style={styles.container}>
      <MapView
        ref={ref}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        initialRegion={{
          longitude: 0,
          latitude: 0,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
        style={styles.map}
        showsUserLocation={true}
        userLocationPriority={"balanced"}
        showsMyLocationButton={true}
        showsBuildings={false}
        showsTraffic={false}
        customMapStyle={MapStyle}
        {...props}
        onRegionChange={onRegionChange}
      >
        <CustomMarker
          zoomLevel={zoomLevel}
          onPress={props.onMarkerPress}
          coordinate={{
            latitude: 37.785834,
            longitude: -122.406417,
          }}
        />
      </MapView>
    </View>
  );
}

Map.propTypes = {
  bold: PropTypes.oneOf([true, false, undefined]),
};

Map.defaultProps = {
  bold: false,
};
