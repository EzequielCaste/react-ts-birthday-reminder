import React from 'react';

interface Props {
  people: string[];
  clear(): void;
}

export const BirthdayReminder: React.FC<Props> = ({ people, clear }) => {
  const clearAll = () => {
    clear(() => []);
  };
  return (
    <div className="birthday-container">
      <h1>Birthday Reminder</h1>
      <ul>
        {people.map(person => (
          <li key={person.name}>
            <img src={person.image} alt="Profile" />
            <div className="birthday-info">
              <strong>{person.name}</strong>
              <span>{person.age} years</span>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};
