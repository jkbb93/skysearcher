import formatPrice from "./formatPrice";

function Price({ value, currency, className }) {
  return <span className={className}>{formatPrice(value, currency)}</span>;
}

export default Price;
