import createDateString from "./createDateString";

const getMinAndMaxDateStrings = ({ startDate, numberOfMonths = 0 } = {}) => {
  const date = new Date(startDate);
  date.setHours(0, 0, 0, 0);
  const minDate = createDateString(date);

  date.setMonth(date.getMonth() + numberOfMonths);
  const maxDate = createDateString(date);

  return [minDate, maxDate];
};

export default getMinAndMaxDateStrings;
