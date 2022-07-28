import { useSelector } from 'react-redux';
import CompanyDetails from '../CompanyDetailes';

const CompanyInfo = () => {
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

export default CompanyInfo;
