function padDigitWithZero(digit) {
  return digit.toString().padStart(2, "0");
}

function createDateString(date) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = padDigitWithZero(monthIndex + 1);
  const day = padDigitWithZero(date.getDate());

  return `${year}-${month}-${day}`;
}

export default createDateString;
