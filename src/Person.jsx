const Person = ({ image, name, age }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div className='text2'>
        {name}
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
