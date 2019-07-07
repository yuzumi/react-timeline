import React from 'react';
import Timeline from 'components/Timeline';

import data from 'data';

const App = () => (
  <main className="app">
    <Timeline {...{data}} />
  </main>
);

export default App;
