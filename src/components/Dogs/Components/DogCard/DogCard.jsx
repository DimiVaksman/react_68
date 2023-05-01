
 

export const DogCard = ({ dog: { breeds, url } }) => {
    // const { bred_for, name, temperament } = breeds[0];
  
    return (
      <div style={{ display: 'flex' }}>
        <img src={breeds.url} alt={breeds.name} width="320" />
        <div>
          <p>Name: {breeds.name}</p>
          <p>Bred for: {breeds.bred_for}</p>
          <p>Temperament: {breeds.temperament}</p>
        </div>
      </div>
    );
  };
