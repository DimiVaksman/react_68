import { fetchDogByBreed } from 'components/Dogs/dogsapi';
import { Component } from 'react';
import { BreedSelect } from '../BreedSelect/BreedSelect';
import { DogCard } from '../DogCard/DogCard';

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
        this.setState({ error: 'ERROR_MSG' });
      } finally {
        this.setState({ isLoading: false });
      }
    };
  
    render() {
      const { dog, isLoading, error } = this.state;
      return (
        <div>
          <BreedSelect onSelect={this.fetchDog} />
          {/* {isLoading && <DogSkeleton />} */}
          {error && <p>{error}</p>}
          {dog && !isLoading && <DogCard dog={dog} />}
        </div>
      );
    }
  }
