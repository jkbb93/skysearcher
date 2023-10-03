import { isValidNumber, clamp } from "./utils";

function createInitialState({ passedStart, passedEnd, passedMin, passedMax }) {
  let start = isValidNumber(passedStart) ? passedStart : null;
  let end = isValidNumber(passedEnd) ? passedEnd : null;
  const min = isValidNumber(passedMin) ? passedMin : null;
  const max = isValidNumber(passedMax) ? passedMax : null;

  const hasStart = start !== null;
  const hasEnd = end !== null;
  const hasMin = min !== null;
  const hasMax = max !== null;

  if (hasStart) {
    start = clamp({
      value: start,
      min,
      max,
      hasMin,
      hasMax
    });
  }

  if (hasEnd) {
    end = clamp({
      value: end,
      min,
      max,
      hasMin,
      hasMax
    });
  }

  return {
    start,
    end,
    hasStart,
    hasEnd,
    min,
    max,
    hasMin,
    hasMax
  };
}

export default createInitialState;
