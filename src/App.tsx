import { useAppStore } from '@/stores';

function App(): JSX.Element {
  const { count, increase, reset } = useAppStore();

  return (
    <div>
      <button data-testid='add-btn' onClick={() => increase()}>
        Add
      </button>
      <button data-testid='reset-btn' onClick={() => reset()}>
        Reset
      </button>
      <div data-testid='count'>Count: {count}</div>
    </div>
  );
}

export default App;
