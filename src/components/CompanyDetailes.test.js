import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CompanyDetailes from './CompanyDetailes';

const MockedCompanyDetails = () => {
  return (
    <BrowserRouter>
      <CompanyDetailes companyData={{}} />
    </BrowserRouter>
  );
};

describe('CompnayDetails', () => {
  test('test if the company details info rendered', async () => {
    render(<MockedCompanyDetails />);
    const companyName = screen.getByTestId(/companyName/i);
    expect(companyName).toBeInTheDocument();
  });
});
