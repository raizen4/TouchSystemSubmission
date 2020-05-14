import React from 'react';
import { render } from '@testing-library/react';
import App from "./index";

test('renders the reset form page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Password reset form');
  expect(linkElement).toBeInTheDocument();
});
