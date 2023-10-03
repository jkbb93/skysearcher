import createDateString from "./createDateString";

function getDateStringForTimestamp(timestamp) {
  if (!Number.isInteger(timestamp)) return "";

  const date = new Date(timestamp);
  date.setHours(0, 0, 0, 0);

  return createDateString(date);
}

export default getDateStringForTimestamp;
