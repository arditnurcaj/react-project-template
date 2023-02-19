import { useAppStore } from '@/stores';
import { Button } from '@/components';

function App(): JSX.Element {
  const { count, increase, reset } = useAppStore();

  return (
    <div>
      <Button data-testid='add-btn' onClick={() => increase()}>
        Add
      </Button>
      <Button data-testid='reset-btn' onClick={() => reset()}>
        Reset
      </Button>
      <div data-testid='count'>Count: {count}</div>
    </div>
  );
}

export default App;
