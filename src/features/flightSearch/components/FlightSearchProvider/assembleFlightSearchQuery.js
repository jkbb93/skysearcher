function assembleFlightSearchQuery(formData) {
  const {
    originIATA,
    destinationIATA,
    departDate,
    returnDate,
    adultPassengers,
    childPassengers
  } = formData;

  const queryParams = {
    originIATA: `origin_iata=${originIATA}`,
    destinationIATA: `destination_iata=${destinationIATA}`,
    departDate: `depart_date=${departDate}`,
    returnDate: `return_date=${returnDate}`,
    adultPassengers: `adult_passengers=${adultPassengers}`,
    childPassengers: `child_passengers=${childPassengers}`
  };

  return "?" + Object.values(queryParams).join("&");
}

export default assembleFlightSearchQuery;
