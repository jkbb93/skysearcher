function formatPrice(value, currency) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Value must be a valid number.');
    }
    
    if (typeof currency !== 'string') {
        throw new Error('Currency must be a valid string.');
    }
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    return formatter.format(value);
}

export default formatPrice;