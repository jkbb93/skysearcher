import { useContext } from "react";
import { DateSelectionDataContext } from "../../contexts";

function useDateSelectionData() {
  const dateSelectionData = useContext(DateSelectionDataContext);

  if (dateSelectionData === undefined) {
    throw new Error(
      "useDateSelectionData must be used within a DatePicker component"
    );
  }

  return dateSelectionData;
}

export default useDateSelectionData;
