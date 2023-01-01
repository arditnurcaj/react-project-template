import { render, screen } from '@testing-library/react';

import App from './App';

describe('app component', () => {
  it('renders count', () => {
    render(<App />);

    expect(screen.queryByTestId('count')).toHaveTextContent('Count: 0');
  });
});
