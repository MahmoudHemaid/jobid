import React from "react";
import { G, Path, Svg } from "react-native-svg";

function CleaningIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 45.2 53.2">
      <G fill={color} stroke="#fff" strokeMiterlimit="10" strokeWidth=".2">
        <Path d="M38.58 53.1H24.21a.8.8 0 01-.67-.37.77.77 0 01-.66.37h-22a.78.78 0 01-.78-.78v-9.5a9.75 9.75 0 018.3-9.62v-2a.78.78 0 01.78-.79h.57V2.23a2.13 2.13 0 114.26 0V30.4h.57a.78.78 0 01.78.78v2a9.4 9.4 0 012.33.66v-2.3a.78.78 0 01.79-.78h.78v-.56a.8.8 0 01.79-.78h22.69a.78.78 0 01.78.78v.56h.79a.79.79 0 01.56.23.75.75 0 01.23.55v3.55a10.58 10.58 0 01-4.1 8.36l-1.67 9a.77.77 0 01-.75.65zm-14.91-8.46v.45l1.19 6.44h13.07l1.28-6.93a10.62 10.62 0 01-3.66 1.09v.63a.78.78 0 01-.78.79H28a.78.78 0 01-.78-.78h0v-.63a10.58 10.58 0 01-3.55-1.06zm-5.17 4.6a.79.79 0 01.79.78v1.51h2.81v-7.82H1.67v7.83h2.8V49A.79.79 0 016 49h0v2.57h2.89v-5.35a.78.78 0 01.81-.75.79.79 0 01.76.75v5.32h7.26V50a.78.78 0 01.78-.79zm10.3-4.81v1.11H34v-1.11zm-.8-1.57h6.74a.78.78 0 01.79.78v.47a9.26 9.26 0 004-1.55l1.65-8.89h-1.32v4.6a.79.79 0 01-.79.78h-7.23a.78.78 0 01-.78-.78v-4.6h-9.51l.78 4.25a9.56 9.56 0 011.33 4.89h0a9 9 0 003.57 1.26v-.47a.8.8 0 01.79-.78zM9.86 34.65a8.19 8.19 0 00-8.16 7.49h20.37a8.18 8.18 0 00-1.15-3.53h0a8.21 8.21 0 00-7-4zm33.66-2.33h0v.57a.78.78 0 01-.68.77l-1.32 7.11a9 9 0 002-5.68zM32.62 31v6.5h5.66V31zm-13.36 1.9h0v1.8a11.03 11.03 0 011 .77l-.34-1.79a.8.8 0 01-.69-.78zM10 32v1.12h3.82V32zm29.88-1v1.1H42V31zm-19 0v1.1h10.18V31zm-9-29.33a.55.55 0 00-.56.56V30.4h1.12V2.23a.55.55 0 00-.56-.56z" />
        <Path d="M6.89 38.1h8.42c.44 0 .79-.22.79-.5s-.35-.5-.79-.5H6.89c-.44 0-.79.22-.79.5s.35.5.79.5zM13.6 45.1c-.28 0-.5.31-.5.7v1.6c0 .39.22.7.5.7s.5-.31.5-.7v-1.6c0-.39-.22-.7-.5-.7z" />
      </G>
    </Svg>
  );
}

export default CleaningIcon;