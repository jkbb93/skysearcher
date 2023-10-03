function getDisplayedPassengers(adultPassengers, childPassengers) {
  const pluralAdults = adultPassengers > 1;
  const pluralChildren = childPassengers !== 1;

  const displayedAdults = `${adultPassengers} ${
    pluralAdults ? "Adults" : "Adult"
  }`;

  const displayedChildren = `${childPassengers} ${
    pluralChildren ? "Children" : "Child"
  }`;

  return `${displayedAdults}, ${displayedChildren}`;
}

export default getDisplayedPassengers;
