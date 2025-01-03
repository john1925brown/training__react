import React, { useState } from 'react';
import { Radio } from './components/Radio/Radio';
import { CashMashine } from './components/CashMashine/CashMashine';
import { Storage } from './components/LocalStrorageTrain/Storage';
import AssotiativeArray from './components/associativeArray/src/AssotiativeArray';
import { Accordion } from './components/Accordion';
import { ControlledInput } from './components/ControlledInput/ControlledInput.stories';

function App() {
  return (
    <div className="App">
      <Accordion title="My list" />
      {/* <Radio /> */}
      {/* <CashMashine /> */}
      {/* <Storage/> */}
      {/* <AssotiativeArray /> */}
    </div>
  );
}

export default App;
