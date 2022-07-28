import { useSelector } from 'react-redux';
import CompanyDetails from '../CompanyDetailes';

const Company = () => {
  const { companyInfoData } = useSelector((state) => state.companyInfo);

  console.log(companyInfoData);

  return (
    <div>
      {companyInfoData.map((company) => (
        <CompanyDetails key={company.companyName} companyData={company} />
      ))}
    </div>
  );
};

export default Company;
