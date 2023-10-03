import { useContext } from "react";
import { DateSelectionHandlersContext } from "../../contexts";

function useDateSelectionHandlers() {
  const dateSelectionHandlers = useContext(DateSelectionHandlersContext);

  if (dateSelectionHandlers === undefined) {
    throw new Error(
      "useDateSelectionHandlers must be used within a DatePicker component"
    );
  }

  return dateSelectionHandlers;
}

export default useDateSelectionHandlers;
