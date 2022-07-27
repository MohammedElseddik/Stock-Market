import PropTypes from 'prop-types';

const StockItem = ({ stocks }) => {
  const {
    companyName, ticker, changes, stockPrice,
  } = stocks;
  return (
    <div>
      <div>
        <h1>{companyName}</h1>
        <span>{ticker}</span>
        <span>{changes.toFixed(2)}</span>
      </div>
      <div>
        <span>USD</span>
        <span>{parseFloat(stockPrice).toFixed(2)}</span>
      </div>
    </div>
  );
};

StockItem.propTypes = {
  stocks: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    stockPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockItem;
