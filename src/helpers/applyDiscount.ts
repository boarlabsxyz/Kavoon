function applyDiscount(
  originalPrice: number,
  discountPercentage: number
): number {
  if (
    originalPrice <= 0 ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    throw new Error('Invalid input values.');
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice;
}

export default applyDiscount;
