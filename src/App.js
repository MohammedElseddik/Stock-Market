import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Stocks from './components/pages/Stocks';
import CompanyInfo from './components/pages/Company';
// import { fetchStocksData } from './redux/features/stocksSlice';
import { fetchCompanyInfoData } from './redux/features/companyInfoSlice';

import './App.css';

function App() {
  const companyInfo = useSelector((state) => state.companyInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (companyInfo.status === 'idle') {
      // dispatch(fetchStocksData());
      dispatch(fetchCompanyInfoData('AAPL'));
    }
  }, []);

  return (
    <div>
      <Stocks />
      <CompanyInfo />
    </div>
  );
}

export default App;
