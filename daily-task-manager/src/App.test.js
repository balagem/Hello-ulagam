import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "My Daily Tasks" heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Daily Tasks/i);
  expect(headingElement).toBeInTheDocument();
});
