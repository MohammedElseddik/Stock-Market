import axios from 'axios';

const stocksUrl = 'https://financialmodelingprep.com/api/v3/actives?apikey=bee8e453e38b2613f8b2e141b1e6d8d8';

const getStocksData = async () => {
  try {
    const response = await axios(stocksUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getStocksData;
