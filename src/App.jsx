import { useEffect, useState } from 'react';
import data from './data';
import List from './List';
const App = () => {
  const [people, setPeople] = useState(data);

  const clear = (id) => {
    const findPerson = people.filter((person) => person.id !== id);
    console.log(findPerson);
    setPeople(findPerson);
  };

  const clearAll = () => {
    setPeople([]);

    if (people.length === 0) {
      setPeople(data);
    }
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today!</h3>
        <List people={people} clearPerson={clear} />
        <button type='button' className='btn btn-block' onClick={clearAll}>
          {people.length === 0 ? 'show all' : 'clear all'}
        </button>
      </section>
    </main>
  );
};
export default App;
