import axios from 'axios';

const stocksUrl = 'https://financialmodelingprep.com/api/v3/actives?apikey=1e8817c7ca78a54d05c70f6c71be0907';

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
