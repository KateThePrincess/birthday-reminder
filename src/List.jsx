import Person from './Person';

const List = ({ people, clearPerson }) => {
  return (
    <section>
      {people.map((person) => {
        const { id } = person;
        return (
          <div style={{ position: 'relative' }} key={id}>
            <Person {...person} />
            <button
              type='button'
              className='btn'
              style={{
                display: 'inline',
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
              onClick={() => clearPerson(id)}
            >
              clear
            </button>
          </div>
        );
      })}
    </section>
  );
};
export default List;
