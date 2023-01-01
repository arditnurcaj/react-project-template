import create from 'zustand';

interface IState {
  count: number;
  increase: () => void;
  reset: () => void;
}

const useStore = create<IState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

function App(): JSX.Element {
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increase);
  const resetCount = useStore((state) => state.reset);

  return (
    <div>
      <button onClick={() => increaseCount()}>Add</button>
      <button onClick={() => resetCount()}>Reset</button>
      <div data-testid='count'>Count: {count}</div>
    </div>
  );
}

export default App;
