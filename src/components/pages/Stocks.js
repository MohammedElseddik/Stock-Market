import { useSelector } from 'react-redux';
import StockItem from '../StockItem';

const Stocks = () => {
  const { stocksData } = useSelector((state) => state.stocks);
  console.log(stocksData);
  return (
    <div>
      {stocksData.map((stock) => (
        <StockItem key={stock.tiker} stocks={stock} />
      ))}
    </div>
  );
};

export default Stocks;
