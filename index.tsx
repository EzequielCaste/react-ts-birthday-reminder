import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import people from './people.json';

import { BirthdayReminder } from './BirthdayReminder';
import { Footer } from './Footer';

interface AppProps {}
interface AppState {
  people: string[];
}

const App = () => {
  const [peopleData, setPeople] = useState(people);

  return (
    <>
      <BirthdayReminder clear={setPeople} people={peopleData} />
      <Footer />
    </>
  );
};

render(<App />, document.getElementById('root'));
