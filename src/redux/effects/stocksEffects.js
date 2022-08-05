const stocksEffectCleanData = ({ payload }) => payload.map((companyStock) => {
  console.log(payload);
  return {
    companyName: companyStock.companyName,
    symbol: companyStock.ticker,
    stockPrice: companyStock.price,
    changes: companyStock.changes,
  };
});

export default stocksEffectCleanData;
