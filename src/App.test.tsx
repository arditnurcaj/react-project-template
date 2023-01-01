import { render, renderHook, act, fireEvent } from '@testing-library/react';

import App from './App';

import { useAppStore } from '@/stores';

describe('app component', () => {
  it('renders count', () => {
    renderHook(() => useAppStore());
    const { queryByTestId } = render(<App />);

    const count = queryByTestId('count');

    expect(count).toHaveTextContent('Count: 0');
  });

  it('increases count', () => {
    renderHook(() => useAppStore());
    const { queryByTestId } = render(<App />);

    const addBtn = queryByTestId('add-btn');
    const count = queryByTestId('count');

    act(() => {
      fireEvent.click(addBtn as HTMLButtonElement);
    });

    expect(count).toHaveTextContent('Count: 1');
  });

  it('resets count', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.count = 2;
    });

    const { queryByTestId } = render(<App />);

    const count = queryByTestId('count');
    const resetBtn = queryByTestId('reset-btn');

    expect(count).toHaveTextContent('Count: 2');

    act(() => {
      fireEvent.click(resetBtn as HTMLButtonElement);
    });

    expect(count).toHaveTextContent('Count: 0');
  });
});
