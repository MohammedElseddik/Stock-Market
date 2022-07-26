const stocksEffectCleanData = ({ payload }) => {
  return payload.map((company) => {
    return {
      companyName: company.companyName,
      ticker: company.ticker,
      price: company.price,
      changes: company.changes,
    };
  });
};

export default stocksEffectCleanData;
