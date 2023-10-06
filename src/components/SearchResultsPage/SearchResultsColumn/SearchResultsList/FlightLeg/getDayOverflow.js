function getDayOverflow(departureTime, arrivalTime) {
  const departureDate = new Date(departureTime);
  departureDate.setHours(0, 0, 0, 0);

  const arrivalDate = new Date(arrivalTime);
  arrivalDate.setHours(0, 0, 0, 0);

  const differenceInMs = arrivalDate - departureDate;

  // Convert ms to days (1 day = 24*60*60*1000 milliseconds)
  const differenceInDays = differenceInMs / (24 * 60 * 60 * 1000);

  // Rounding in case of precision errors
  return Math.round(differenceInDays);
}

export default getDayOverflow;
