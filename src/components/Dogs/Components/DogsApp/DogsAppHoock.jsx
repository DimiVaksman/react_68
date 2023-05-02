import { useState } from 'react';
// import { BreedSelect } from '../BreedSelect/BreedSelect';
import { BreedSelectHoock } from '../BreedSelect/BreedSelectHoock';
import { fetchDogByBreed } from '../dogsapi';
import { Dog } from '../DogCard/DogCard';
import { DogsSkeleton } from 'components/Dogs/DogSkeleton/DogSkeleton';
import { useEffect } from 'react';
// import { DogSkeleton } from './DogSkeleton';

const ERROR_MSG =
  'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇';

export const DogsApps = () => {

const [dog, setDog] = useState(null)
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)


   const fetchDog = async breedId => {
        try {
            setIsLoading(true)
            setError(true)
            const fetchedDog = await fetchDogByBreed(breedId);
            setDog(fetchedDog);
          } catch (error) {
            setError(ERROR_MSG);
          } finally {
            setIsLoading(false);
          }
    }


  return (
    <div>
      {/* <BreedSelect onSelect={this.fetchDog} /> */}
      <BreedSelectHoock onSelect={fetchDog} />

      {error && <p>{error}</p>}
      {isLoading && <DogsSkeleton />}
      {dog && !isLoading && <Dog dog={dog} />}
    </div>
  );



}