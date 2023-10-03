function getTimestampForDateString(dateString) {
  if (typeof dateString !== "string" || !dateString) return;

  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);

  const timestamp = date.getTime();
  if ((timestamp !== 0) & !timestamp) return;

  return timestamp;
}

export default getTimestampForDateString;
