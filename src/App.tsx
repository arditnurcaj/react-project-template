import { useState } from 'react';

import styled from './App.module.css';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className={styled.app}>
      <button onClick={() => setCount((current) => current + 1)}>Add</button>
      <div data-testid='count'>Count: {count}</div>
    </div>
  );
}

export default App;
