import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('test if the header componet rendered', async () => {
    render(<Header />);
    const header = screen.getByText(/Stock-Market/i);
    expect(header).toBeInTheDocument();
  });
});
