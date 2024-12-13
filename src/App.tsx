import React from 'react';
import { Accordeon } from './components/Accordeon';
import { Radio } from './components/Radio/Radio';

function App() {
  return (
    <div className="App">
      <Accordeon title="My list" />
      <Radio />
    </div>
  );
}

export default App;
