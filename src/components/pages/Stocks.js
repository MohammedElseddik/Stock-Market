import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import StockItem from '../StockItem';

const Stocks = () => {
  const { stocksData } = useSelector((state) => state.stocks);

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchStockHandler = (event) => {
    setSearchTerm(event.target.value.trim().toLowerCase());
  };

  const filteredStocks = searchTerm === ''
    ? stocksData
    : stocksData.filter((stock) => stock.companyName.toLowerCase().includes(searchTerm));

  return (
    <div>
      <div>
        <input type="text" onChange={onSearchStockHandler} />
      </div>
      <div>
        {filteredStocks.map((stock) => (
          <StockItem key={uuidv4()} stocks={stock} />
        ))}
      </div>
    </div>
  );
};

export default Stocks;
