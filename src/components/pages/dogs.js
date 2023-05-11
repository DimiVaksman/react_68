import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs, useDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);

  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? "";

  const updateQueryString = e => {
    const dogIdValue = e.target.value
    if (dogIdValue === '') {

     return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue })

    // // Якщо e.target.value '' то записуємо {}
    // setSearchParams({});

    // // Якщо e.target.value  не '' то записуємо {dogId: e.target.value}
    // setSearchParams({ dogId: e.target.value });
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ c: 'hello' })}>Change sp</button>
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{from: location}}>{dog}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
