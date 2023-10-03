function clamp({ value, min, max, hasMin, hasMax }) {
  if (hasMin && hasMax && min > max) return null;
  if (hasMin && value < min) return min;
  if (hasMax && value > max) return max;
  return value;
}

export default clamp;
