import { useReducer, useCallback, useEffect } from "react";
import { createInitialState, reducer, actionTypes } from "./reducer";

/*
    If a min/max is set, and a selected number is outside of it,
    the selection will be clamped to the min/max.

    If the start value is greater than the end value, they will be
    swapped.

    If a selection is not a valid number (not of type number and
    an integer), the selection will be null instead. Decimal
    values are not allowed in case of precision issues

    The hook can be controlled (like a 'controlled input') from
    the component/hook that calls it; you can pass a start and end
    value, and onStartChange/onEndChange callback to update these.
    If the callbacks are omitted, the passed start/end will just
    act as default values.
    To sync the internal and external states, there are useEffects
    that update the internal state when the external changes,
    and the selectionData object includes a 'requireSync' flag
    so that when the internal state changes, another useEffect
    will call the onStartChange/onEndChange callbacks to update
    the external state with the changes.
  */

function useSelectionRange({
  start: passedStart = null,
  end: passedEnd = null,
  min: passedMin = null,
  max: passedMax = null,
  onStartChange: onStartChangeCallback,
  onEndChange: onEndChangeCallback
} = {}) {
  const [selectionData, dispatch] = useReducer(
    reducer,
    { passedStart, passedEnd, passedMin, passedMax },
    createInitialState
  );

  const {
    start,
    end,
    hasStart,
    hasEnd,
    min,
    max,
    hasMin,
    hasMax,
    requiresSync
  } = selectionData;

  const selectBoundsInSequence = useCallback(
    (value) => dispatch({ type: actionTypes.selectBoundsInSequence, value }),
    []
  );

  const setStart = useCallback(
    (value) =>
      dispatch({
        type: actionTypes.setStart,
        value
      }),
    []
  );

  const setEnd = useCallback(
    (value) => dispatch({ type: actionTypes.setEnd, value }),
    []
  );

  const clearSelection = useCallback(
    (selectionToClear) =>
      dispatch({ type: actionTypes.clearSelection, selectionToClear }),
    []
  );

  useEffect(() => {
    if (!requiresSync) return;

    const hasStartChangeCallback = typeof onStartChangeCallback === "function";
    const hasEndChangeCallback = typeof onEndChangeCallback === "function";

    if (hasStartChangeCallback && passedStart !== start) {
      onStartChangeCallback(start);
    }

    if (hasEndChangeCallback && passedEnd !== end) {
      onEndChangeCallback(end);
    }

    dispatch({ type: actionTypes.clearRequiresSync });
  }, [
    requiresSync,
    onStartChangeCallback,
    onEndChangeCallback,
    passedStart,
    passedEnd,
    start,
    end
  ]);

  useEffect(() => {
    dispatch({ type: actionTypes.setStart, value: passedStart });
  }, [passedStart]);

  useEffect(() => {
    dispatch({ type: actionTypes.setEnd, value: passedEnd });
  }, [passedEnd]);

  useEffect(() => {
    dispatch({ type: actionTypes.setMin, value: passedMin });
  }, [passedMin]);

  useEffect(() => {
    dispatch({ type: actionTypes.setMax, value: passedMax });
  }, [passedMax]);

  return {
    selectionStart: start,
    selectionEnd: end,
    selectionHasStart: hasStart,
    selectionHasEnd: hasEnd,
    selectionMin: min,
    selectionMax: max,
    selectionHasMin: hasMin,
    selectionHasMax: hasMax,
    selectBoundsInSequence,
    setStart,
    setEnd,
    clearSelection
  };
}

export default useSelectionRange;
