import {useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchBreeds } from '../dogsapi';


const ERROR_MSG =
  'Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹';

export const BreedSelectHoock = ({onSelect})=> {


const [breeds, setBreeds] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

  const options = breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));

      useEffect(() => {
async function getBreeds(){
    try {
        setIsLoading(true);
        setError(null)
        const fetchedBreeds = await fetchBreeds();
        setBreeds(fetchedBreeds);
      } catch (error) {
        setError(ERROR_MSG );
      } finally {
        setIsLoading(false );
      }
}
getBreeds()
      },[])

    return (
        <div>
          <Select
            options={options}
            isLoading={isLoading}
            onChange={option => onSelect(option.value)}
          />
          {error && <p>{error}</p>}
        </div>
      );







}