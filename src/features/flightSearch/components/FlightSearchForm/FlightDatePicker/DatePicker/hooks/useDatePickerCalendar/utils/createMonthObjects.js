function getMonthName(monthIndex) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return monthNames[monthIndex];
}

function createMonthObjects(dateObjects) {
  const monthObjects = [];
  let monthIndex;

  dateObjects.forEach((date) => {
    if (date.monthIndex !== monthIndex) {
      monthObjects.push({
        year: date.year,
        monthIndex: date.monthIndex,
        name: getMonthName(date.monthIndex),
        days: []
      });
      monthIndex = date.monthIndex;
    }

    const workingIndex = monthObjects.length - 1;
    monthObjects[workingIndex].days.push(date);
  });

  return monthObjects;
}

export default createMonthObjects;
