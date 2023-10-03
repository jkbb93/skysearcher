function breakpointString(pixels) {
  return `(min-width: ${pixels}px)`;
}

const breakpoints = {
  sm: breakpointString(576),
  md: breakpointString(768),
  lg: breakpointString(992),
  xl: breakpointString(1200)
};

export default breakpoints;
