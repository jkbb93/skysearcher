import { useReducer, useCallback } from "react";
import createDateObjects from "./createDateObjects";

const actionTypes = {
  incrementStartMonth: "incrementStartMonth",
  decrementStartMonth: "decrementStartMonth",
  incrementStartYear: "incrementStartYear",
  decrementStartYear: "decrementStartYear",
  updateNumberOfMonths: "updateNumberOfMonths",
  updateCalendar: "updateCalendar"
};

function reducer(state, action) {
  const monthsInYear = 12;
  const januaryMonthIndex = 0;
  const decemberMonthIndex = 11;

  switch (action.type) {
    case actionTypes.incrementStartMonth: {
      const incrementedIndex = state.startMonthIndex + 1;
      const wrappedIndex = incrementedIndex % monthsInYear;
      const nextStartMonthIndex = wrappedIndex;

      let nextStartYear = state.startYear;
      if (nextStartMonthIndex === januaryMonthIndex) nextStartYear++;

      return {
        ...state,
        startMonthIndex: nextStartMonthIndex,
        startYear: nextStartYear
      };
    }

    case actionTypes.decrementStartMonth: {
      const decrementedIndex = state.startMonthIndex - 1;
      // Adding monthsInYear to decrementedIndex accounts for if decrementedIndex is -1
      const wrappedIndex = (decrementedIndex + monthsInYear) % monthsInYear;
      const nextStartMonthIndex = wrappedIndex;

      let nextStartYear = state.startYear;
      if (nextStartMonthIndex === decemberMonthIndex) nextStartYear--;

      return {
        ...state,
        startMonthIndex: nextStartMonthIndex,
        startYear: nextStartYear
      };
    }

    case actionTypes.incrementStartYear: {
      return {
        ...state,
        startYear: state.startYear + 1
      };
    }

    case actionTypes.decrementStartYear: {
      return {
        ...state,
        startYear: state.startYear - 1
      };
    }

    case actionTypes.updateNumberOfMonths: {
      return {
        ...state,
        numberOfMonths: action.numberOfMonths
      };
    }

    case actionTypes.updateCalendar: {
      return {
        ...state,
        ...action.calendarConfig
      };
    }

    default: {
      return state;
    }
  }
}

function useDateList({
  startYear = new Date().getFullYear(),
  startMonthIndex = new Date().getMonth(),
  numberOfMonths = 1
} = {}) {
  const [calendarConfig, dispatch] = useReducer(reducer, {
    startYear,
    startMonthIndex,
    numberOfMonths
  });

  const dateObjects = createDateObjects(calendarConfig);

  const incrementStartMonth = useCallback(
    () => dispatch({ type: actionTypes.incrementStartMonth }),
    []
  );

  const decrementStartMonth = useCallback(
    () => dispatch({ type: actionTypes.decrementStartMonth }),
    []
  );

  const incrementStartYear = useCallback(
    () => dispatch({ type: actionTypes.incrementStartYear }),
    []
  );

  const decrementStartYear = useCallback(
    () => dispatch({ type: actionTypes.decrementStartMonth }),
    []
  );

  const updateNumberOfMonths = useCallback(
    (newNumber) =>
      dispatch({
        type: actionTypes.updateNumberOfMonths,
        numberOfMonths: newNumber
      }),
    []
  );

  const updateCalendar = useCallback(
    (newConfig) =>
      dispatch({
        type: actionTypes.updateCalendar,
        calendarConfig: newConfig
      }),
    []
  );

  return {
    dateObjects,
    incrementStartMonth,
    decrementStartMonth,
    incrementStartYear,
    decrementStartYear,
    updateNumberOfMonths,
    updateCalendar
  };
}

export default useDateList;
