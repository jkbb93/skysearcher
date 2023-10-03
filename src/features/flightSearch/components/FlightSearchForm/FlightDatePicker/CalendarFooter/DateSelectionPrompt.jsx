function DateSelectionPrompt({
  selectionHasStart,
  selectionHasEnd,
  className
}) {
  const hasStartOnly = selectionHasStart && !selectionHasEnd;
  const hasStartAndEnd = selectionHasStart && selectionHasEnd;

  return (
    <span className={className}>
      {!selectionHasStart && "Select departure"}
      {hasStartOnly && "Search one way, or select return"}
      {hasStartAndEnd && "Confirm or change dates"}
    </span>
  );
}

export default DateSelectionPrompt;
