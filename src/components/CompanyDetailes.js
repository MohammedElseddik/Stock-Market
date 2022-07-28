import PropTypes from 'prop-types';

const CompanyDetails = ({ companyData }) => {
  const {
    image,
    companyName,
    ticker,
    StockPrice,
    marketCap,
    ceo,
    website,
    description,
    address,
    changes,
    currency,
  } = companyData;

  return (
    <div>
      <button type="button">Back Home</button>
      <div>
        <div>
          <img src={image} alt="company-logo" />
        </div>
        <div>
          <ul>
            <li>{companyName}</li>
            <li>{ticker}</li>
            <li>{StockPrice}</li>
            <li>{marketCap}</li>
            <li>{ceo}</li>
            <li>{website}</li>
            <li>{description}</li>
            <li>{address}</li>
            <li>{changes.toFixed(2)}</li>
            <li>{currency}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

CompanyDetails.propTypes = {
  companyData: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    StockPrice: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
    ceo: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyDetails;