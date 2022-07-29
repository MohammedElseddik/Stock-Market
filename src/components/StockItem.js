import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from '../styles/StockItem.module.css';

const StockItem = ({ stocks }) => {
  const {
    companyName, symbol, changes, stockPrice,
  } = stocks;

  return (
    <Link to={`/details/${symbol}`} className={styles['stock-item']}>
      <div className={styles['stock-item__header']}>
        <h1>{companyName}</h1>
        <div>
          {symbol}
          {' '}
          --
          {'   '}
          <span>{`( ${changes.toFixed(2)} )`}</span>
        </div>
      </div>
      <div className={styles['stock-item__footer']}>
        <span>USD</span>
        <span>{parseFloat(stockPrice).toFixed(2)}</span>
      </div>
    </Link>
  );
};

StockItem.propTypes = {
  stocks: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    stockPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockItem;
