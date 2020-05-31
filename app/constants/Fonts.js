const type = {
  regular: "Montserrat-Regular",
  medium: "Montserrat-Medium",
  bold: "Montserrat-Bold",
};

const size = {
  h1: 32,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 12,
  h6: 10,
  input: 18,
  xxLarge: 42,
  xLarge: 24,
  large: 20,
  regular: 16,
  description: 15,
  medium: 14,
  small: 12,
  extraSmall: 10,
  tiny: 8,
  extraTiny: 6,
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.bold,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.bold,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  title: {
    fontFamily: type.bold,
    fontSize: size.large,
  },
  description: {
    fontFamily: type.medium,
    fontSize: size.description,
  },
};

export default {
  ...type,
  type,
  size,
  style,
};
