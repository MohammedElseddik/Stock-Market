import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import ArrowCircleRight from '../icons/ArrowCircleRight';

import styles from '../styles/StockItem.module.css';

const StockItem = ({ stocks, id, dataLength }) => {
  const {
    companyName, symbol, changes, stockPrice,
  } = stocks;

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  const styleItems = (index) => {
    let backgroundColor = '';

    if (windowDimenion.winWidth >= 600) {
      backgroundColor = '#2d4573';
    } else {
      for (let i = 0; i < dataLength; i += 1) {
        if (index === i * 4 || index === i * 4 - 1) {
          backgroundColor = '#4369b0';
        }
      }
    }

    return backgroundColor;
  };

  return (
    <li
      data-testid="companyItem"
      className={styles['stock-item']}
      style={{ backgroundColor: styleItems(id) }}
    >
      <Link to={`/details/${symbol}`} className={styles['stock-item__link']}>
        <div className={styles['stock-item__header']}>
          <h1>{companyName}</h1>
          <div>
            {symbol}
            {' '}
            -
            {'   '}
            <span className={styles.green}>{`( ${changes} )`}</span>
          </div>
          <ArrowCircleRight />
        </div>
        <div className={styles['stock-item__footer']}>
          <span>USD</span>
          <span>{parseFloat(stockPrice)}</span>
        </div>
      </Link>
    </li>
  );
};

StockItem.propTypes = {
  id: PropTypes.number.isRequired,
  dataLength: PropTypes.number.isRequired,
  stocks: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    stockPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockItem;
