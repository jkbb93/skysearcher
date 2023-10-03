function HighlightedSpan({
  string,
  query,
  stringClassName,
  highlightClassName
}) {
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const queryRegEx = new RegExp(`(${escapedQuery})`, "i");
  const segments = string.split(queryRegEx);

  const lowerCaseQuery = query.toLowerCase();

  const segmentsWithTags = segments.map((segment, index) => {
    if (segment.toLowerCase() === lowerCaseQuery) {
      return (
        <span key={index} className={highlightClassName}>
          {segment}
        </span>
      );
    }

    return segment;
  });

  return <span className={stringClassName}>{segmentsWithTags}</span>;
}

export default HighlightedSpan;
