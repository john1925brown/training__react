import React from 'react';
import { Accordeon } from './components/Accordeon';
import { Radio } from './components/Radio/Radio';
import { CashMashine } from './components/CashMashine/CashMashine';
import { Storage } from './components/LocalStrorageTrain/Storage';

function App() {
  return (
    <div className="App">
      {/* <Accordeon title="My list" /> */}
      {/* <Radio /> */}
      {/* <CashMashine /> */}
      <Storage/>
    </div>
  );
}

export default App;
