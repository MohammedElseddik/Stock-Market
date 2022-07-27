const stocksEffectCleanData = ({ payload }) =>
  payload.map((companyStock) => ({
    companyName: companyStock.companyName,
    ticker: companyStock.ticker,
    price: companyStock.price,
    changes: companyStock.changes,
  }));

export default stocksEffectCleanData;
