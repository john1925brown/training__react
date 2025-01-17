import React, { useState } from 'react';
import { Radio } from './components/Radio/Radio';
import { CashMashine } from './components/CashMashine/CashMashine';
import { Storage } from './components/LocalStrorageTrain/Storage';
import AssotiativeArray from './components/associativeArray/src/AssotiativeArray';
import { Accordion } from './components/Accordion';
import { ControlledInput } from './components/ControlledInput/ControlledInput.stories';
import { AppRouter } from './router_dom/src/AppRouter';
import { ActualDate } from './components/ActualDate/ActualDate';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onClickHandler =  (value: any) => {
    console.log(value)
  }
  return (
    <div className="App">
      <Accordion
        title="My list"
        isCollapsed={isCollapsed}
        collapsedHandler={collapsedHandler}
        items={[
          { title: 'a', value: 1 },
          { title: 's', value: 2 },
          { title: 'q', value: 3 },
        ]}
        onClickHandler={onClickHandler}
      />
      {/* <Radio /> */}
      {/* <CashMashine /> */}
      {/* <Storage/> */}
      {/* <AssotiativeArray /> */}
      <AppRouter/>
      {/* <ActualDate/> */}
    </div>
  );
}

export default App;
