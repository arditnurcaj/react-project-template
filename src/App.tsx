import { useAppStore } from '@/stores';

function App(): JSX.Element {
  const { count, increase, reset } = useAppStore();

  return (
    <div className='p-6'>
      <button
        className='btn btn-primary mr-4'
        data-testid='add-btn'
        onClick={() => increase()}
      >
        Add
      </button>
      <button
        className='btn btn-outline'
        data-testid='reset-btn'
        onClick={() => reset()}
      >
        Reset
      </button>
      <div className='mt-4' data-testid='count'>
        Count: {count}
      </div>
    </div>
  );
}

export default App;
