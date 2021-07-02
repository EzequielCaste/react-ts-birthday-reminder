import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import people from './people.json';

import { BirthdayReminder } from './BirthdayReminder';

interface AppProps {}
interface AppState {
  people: string[];
}

const App = () => {
  const [peopleData, setPeople] = useState(people);

  return (
    <div className="App">
      <BirthdayReminder clear={setPeople} people={peopleData} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
