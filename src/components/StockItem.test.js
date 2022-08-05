import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StockItem from './StockItem';

const MockedStockItems = () => {
  return (
    <BrowserRouter>
      <StockItem stocks={{}} />
    </BrowserRouter>
  );
};

describe('StockItem', () => {
  test('test if the items exist', () => {
    render(<MockedStockItems />);
    const companyItem = screen.getByTestId(/companyItem/i);
    expect(companyItem).toBeInTheDocument();
  });
});
