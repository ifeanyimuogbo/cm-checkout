export const getColorFromTheme = (color) => {
  return (props) => props.theme.colors[color];
};

export const getFontSizeFromTheme = (size) => {
  return (props) => props.theme.fontSize[size];
};

export const getFontWeightFromTheme = (weight) => {
  return (props) => props.theme.fontWeight[weight];
};

export const getLineHeightFromTheme = (lineHeight) => {
  return (props) => props.theme.lineHeight[lineHeight];
};
