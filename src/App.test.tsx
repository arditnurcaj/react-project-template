import { render, screen, act, fireEvent } from '@testing-library/react';

import App from './App';

describe('app component', () => {
  it('renders count', () => {
    render(<App />);

    screen.debug();

    expect(screen.queryByTestId('count')).toHaveTextContent('Count: 0');
  });

  it('increases count', () => {
    render(<App />);

    screen.debug();

    const btn = screen.queryByRole('button');

    act(() => {
      if (btn !== null) fireEvent.click(btn);
    });

    expect(screen.queryByTestId('count')).toHaveTextContent('Count: 1');
  });
});
