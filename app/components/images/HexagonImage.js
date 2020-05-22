import React from "react";
import Svg, { Path, Image, Defs, Pattern } from "react-native-svg";
import { Layout } from "../../constants";
import PropTypes from "prop-types";

export default function HexagonImage({ style, size, source, ...rest }) {
  return (
    <Svg
      data-name="Capa 1"
      viewBox="0 0 157.14 144"
      style={[{ padding: size }, style]}
      {...rest}
    >
      <Defs>
        <Pattern id={"img"} patternUnits="objectBoundingBox">
          <Image
            height={144}
            width={157.14}
            preserveAspectRatio="none"
            href={source}
            x={0}
            y={3}
          />
        </Pattern>
      </Defs>
      <Path
        d="M100.8 4H56.34a29.53 29.53 0 00-25.58 14.73L8.53 57.23a29.52 29.52 0 000 29.54l22.23 38.5A29.53 29.53 0 0056.34 140h44.46a29.54 29.54 0 0025.58-14.77l22.23-38.5a29.52 29.52 0 000-29.54l-22.23-38.5A29.54 29.54 0 00100.8 4z"
        fill="url(#img)"
        stroke="#fff"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

HexagonImage.propTyppes = {
  size: PropTypes.number,
};
HexagonImage.defaultProps = {
  size: Layout.window.width * 0.2,
};
