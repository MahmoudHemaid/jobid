import React from "react";
import { Path, Svg } from "react-native-svg";

function DeliveryServicesIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 60.8 44.832">
      <Path
        d="M44.3 43.9a7.813 7.813 0 01-7.6-6H24.1a7.75 7.75 0 01-9.3 5.8 7.917 7.917 0 01-5.9-5.8h-8V.9h31.2v6.9h10a7.146 7.146 0 016.1 3.6l4.3 7.7 7.4 2.6v16.2h-8a7.9 7.9 0 01-7.6 6zm0-12a4.3 4.3 0 104.3 4.3 4.268 4.268 0 00-4.3-4.3zm-27.8 0a4.3 4.3 0 104.3 4.3 4.268 4.268 0 00-4.3-4.3zm27.8-3.5a7.813 7.813 0 017.6 6h4.6V24.1l-6.4-2.3-4.9-8.8a3.493 3.493 0 00-3-1.8h-10v23.2h4.6a7.618 7.618 0 017.5-6zm-27.8 0a7.813 7.813 0 017.6 6h4.6V4.3H4.4v30.1h4.5a7.9 7.9 0 017.6-6z"
        fill={color}
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.8"
      />
    </Svg>
  );
}

export default DeliveryServicesIcon;
