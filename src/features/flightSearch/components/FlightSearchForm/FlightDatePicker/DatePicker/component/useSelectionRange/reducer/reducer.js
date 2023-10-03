import actionTypes from "./actionTypes";
import { isValidNumber, clamp } from "./utils";

function assembleNewState(state, newValues) {
  const { start: newStart, end: newEnd, min: newMin, max: newMax } = newValues;
  const { start: prevStart, end: prevEnd, min: prevMin, max: prevMax } = state;

  let start = newStart !== undefined ? newStart : prevStart;
  let end = newEnd !== undefined ? newEnd : prevEnd;
  const min = newMin !== undefined ? newMin : prevMin;
  const max = newMax !== undefined ? newMax : prevMax;

  const hasStart = start !== null;
  const hasEnd = end !== null;
  const hasMin = min !== null;
  const hasMax = max !== null;

  if (hasStart) {
    start = clamp({ value: start, min, max, hasMin, hasMax });
  }

  if (hasEnd) {
    end = clamp({ value: end, min, max, hasMin, hasMax });
  }

  if (hasStart && hasEnd && start > end) {
    const swap = start;
    start = end;
    end = swap;
  }

  return {
    ...state,
    start,
    end,
    hasStart,
    hasEnd,
    requiresSync: true
  };
}

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.selectBoundsInSequence: {
      const actionValue = isValidNumber(action.value) ? action.value : null;
      const hasActionValue = actionValue !== null;

      if (state.hasStart && state.hasEnd) {
        const newValues = {
          start: actionValue,
          end: null
        };

        return assembleNewState(state, newValues);
      }

      if (!state.hasStart) {
        const valueMoreThanEnd =
          hasActionValue && state.hasEnd && actionValue > state.end;

        const newValues = valueMoreThanEnd
          ? { start: actionValue, end: null }
          : { start: actionValue };

        return assembleNewState(state, newValues);
      }

      if (!state.hasEnd) {
        const valueLessThanStart =
          hasActionValue && state.hasStart && actionValue < state.start;

        const newValues = valueLessThanStart
          ? { start: actionValue, end: null }
          : { end: actionValue };

        return assembleNewState(state, newValues);
      }

      break;
    }

    case actionTypes.setStart:
    case actionTypes.setEnd: {
      const actionValue = isValidNumber(action.value) ? action.value : null;

      if (action.type === actionTypes.setStart) {
        return assembleNewState(state, { start: actionValue });
      }

      if (action.type === actionTypes.setEnd) {
        return assembleNewState(state, { end: actionValue });
      }

      break;
    }

    case actionTypes.clearSelection: {
      if (action.selectionToClear === "start") {
        return assembleNewState(state, { start: null });
      }

      if (action.selectionToClear === "end") {
        return assembleNewState(state, { end: null });
      }

      return assembleNewState(state, { start: null, end: null });
    }

    case actionTypes.setMin:
    case actionTypes.setMax: {
      const actionValue = isValidNumber(action.value) ? action.value : null;

      if (action.type === actionTypes.setMin) {
        return assembleNewState(state, { min: actionValue });
      }

      if (action.type === actionTypes.setMax) {
        return assembleNewState(state, { max: actionValue });
      }

      break;
    }

    case actionTypes.clearRequiresSync: {
      return { ...state, requiresSync: false };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
