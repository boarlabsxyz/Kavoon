function getTotalPrice(products) {
  return products.reduce(
    (sum, { priceEURO, priceUAH, additionProductData, count }) => {
      const price = { priceEURO, priceUAH };
      const keys = Object.keys(price);

      if (additionProductData) {
        keys.forEach((key) => {
          sum[key] +=
            price[key] * count +
            additionProductData.price * additionProductData.count;
        });

        return sum;
      }

      keys.forEach((key) => {
        sum[key] += price[key] * count;
      });
      return sum;
    },
    { priceEURO: 0, priceUAH: 0 }
  );
}

export default getTotalPrice;
