import airportData from "./airportData";

// function normalizeString(string) {
//   return string
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "") // Remove diacritic marks
//     .replace(/[-‑–—]/g, " ") // Replace hyphens with spaces
//     .replace(/[^a-zA-Z0-9 ]/g, ""); // Remove special characters except spaces
// }

function dataObjectMatchesQuery(dataObject, query) {
  // Extract all values from the dataObject, lowerCase them and split into segments (invidual words, delimited by a space)
  const dataValues = Object.values(dataObject);
  const allDataValueSegments = [];

  dataValues.forEach((value) => {
    const lowerCaseValues = value.toLowerCase();
    const valueSegments = lowerCaseValues.split(" ");
    allDataValueSegments.push(...valueSegments);
  });

  // Lower case and split the query into segments; pick out the last segment. earlierQuerySegments is every segment except last.
  const lowerCaseQuery = query.toLowerCase();
  const querySegments = lowerCaseQuery.split(" ");
  const lastQuerySegment = querySegments[querySegments.length - 1];
  const earlierQuerySegments = querySegments.slice(0, querySegments.length - 1);

  /* 
  Check if lastQuerySegment matches any dataValueSegment; this is from the start of the value up to the length of the querySegment,
  so if the lastQuerySegment is only the first half of a word, it will match. 
  */
  const lastQuerySegmentMatches = allDataValueSegments.some(
    (valueSegment) =>
      valueSegment.slice(0, lastQuerySegment.length) === lastQuerySegment
  );

  // Check all earlierQuerySegments match; they should all be present amongst allDataValueSegments
  const earlierQuerySegmentsMatch = earlierQuerySegments.every((querySegment) =>
    allDataValueSegments.includes(querySegment)
  );

  return earlierQuerySegmentsMatch && lastQuerySegmentMatches;
}

function simulatedAPI(query, limit = null) {
  const validLimit = Number.isInteger(limit) || limit === null;
  const hasLimit = validLimit && limit !== null;
  const matchingLocations = [];

  airportData.forEach((airport) => {
    const matches = dataObjectMatchesQuery(airport, query);
    const { airportIATA, country } = airport;
    const id = airportIATA + country;

    if (matches) {
      matchingLocations.push({ id, ...airport });
    }
  });

  const results = hasLimit
    ? matchingLocations.slice(0, limit - 1)
    : matchingLocations;

  return results;
}

export default simulatedAPI;
