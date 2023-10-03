function getDateInfo(date) {
  const timestamp = date.getTime();
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const dayOfMonth = date.getDate();
  const dayOfWeekIndex = date.getDay();

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const currentDateTimestamp = currentDate.getTime();

  const isCurrentDate = timestamp === currentDateTimestamp;
  const isPastDate = timestamp < currentDateTimestamp;

  return {
    timestamp,
    year,
    monthIndex,
    dayOfMonth,
    dayOfWeekIndex,
    isCurrentDate,
    isPastDate
  };
}

function createDateObjects({
  startYear,
  startMonthIndex,
  numberOfMonths
} = {}) {
  const dates = [];

  const dateIteration = new Date(startYear, startMonthIndex, 1);
  const endDate = new Date(startYear, startMonthIndex + numberOfMonths, 0);

  while (dateIteration <= endDate) {
    const dateInfo = getDateInfo(dateIteration);
    dates.push(dateInfo);

    dateIteration.setDate(dateIteration.getDate() + 1);
  }

  return dates;
}

export default createDateObjects;
