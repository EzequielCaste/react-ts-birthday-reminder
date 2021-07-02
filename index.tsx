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

// class App extends Component<AppProps, AppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: people
//     };
//   }
//   clearAll = () => {
//     this.setState(() => ({
//       people: []
//     }));
//     console.log(people);
//   };

//   render() {
//     return (
//       <div className="App">
//         <BirthdayReminder people={peopleData} />
//         <button onClick={this.clearAll}>Clear All</button>
//       </div>
//     );
//   }
// }

render(<App />, document.getElementById('root'));
