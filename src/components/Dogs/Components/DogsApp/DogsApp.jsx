import { Component } from 'react';
// import { BreedSelect } from '../BreedSelect/BreedSelect';
import { BreedSelectHoock } from '../BreedSelect/BreedSelectHoock';
import { fetchDogByBreed } from '../dogsapi';
import { Dog } from '../DogCard/DogCard';
import { DogsSkeleton } from 'components/Dogs/DogSkeleton/DogSkeleton';
// import { DogSkeleton } from './DogSkeleton';

const ERROR_MSG =
  'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇';

export class DogsApps extends Component {
  state = {
    dog: null,
    isLoading: false,
    error: null,
  };

  fetchDog = async breedId => {
    try {
      this.setState({ isLoading: true, error: null });
      const fetchedDog = await fetchDogByBreed(breedId);
      this.setState({ dog: fetchedDog });
    } catch (error) {
      this.setState({ error: ERROR_MSG });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { dog, isLoading, error } = this.state;
    return (
      <div>
        {/* <BreedSelect onSelect={this.fetchDog} /> */}
        <BreedSelectHoock onSelect={this.fetchDog} />

        {error && <p>{error}</p>}
        {isLoading && <DogsSkeleton />}
        {dog && !isLoading && <Dog dog={dog} />}
      </div>
    );
  }
}