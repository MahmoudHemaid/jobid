import React from "react";
import { G, Path, Svg } from "react-native-svg";

function PetIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 41.989 43.128">
      <G
        data-name="nature-24px-outline paw"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <Path d="M15.515 11.843h0a3.77 3.77 0 002.36-4.62l-1-3.57a3.47 3.47 0 00-4.2-2.54h-.16a3.75 3.75 0 00-2.35 4.62l1 3.56a3.46 3.46 0 004.2 2.55zM26.515 11.843h0a3.75 3.75 0 01-2.35-4.62l1-3.57a3.46 3.46 0 014.2-2.54h.15a3.76 3.76 0 012.36 4.62l-1 3.56a3.47 3.47 0 01-4.2 2.55zM7.745 18.143h0a3.52 3.52 0 00.46-5l-.06-.06-.76-.88a3.66 3.66 0 00-5.1-.39h0a3.53 3.53 0 00-.45 5l.05.06.76.88a3.67 3.67 0 005.1.39zM34.285 18.143h0a3.52 3.52 0 01-.45-5v-.06l.76-.88a3.66 3.66 0 015.1-.39h0a3.51 3.51 0 01.45 5v.06l-.76.87a3.66 3.66 0 01-5.1.4zM12.135 23.783l-4.12 7.2c-3.42 6 2.44 13 8.77 10.54l.36-.14a10.5 10.5 0 017.72 0l.36.14c6.34 2.46 12.21-4.6 8.79-10.54l-4.12-7.2a10.63 10.63 0 00-14.73-3 10.42 10.42 0 00-3.03 3z" />
      </G>
    </Svg>
  );
}

export default PetIcon;
