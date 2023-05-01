import { fetchBreeds } from 'components/Dogs/dogsapi';
import { Component } from 'react';
import Select from 'react-select';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export class BreedSelect extends Component {

    state = {
        breeds: [],
        isLoading: false, 
        error: null,
    }
  async componentDidMount() {
    try {
        this.setState({isLoading: true, error: null})
        const fetchedBreed = await fetchBreeds()
        this.setState({breeds: fetchedBreed})
    } catch (error) {
        this.setState({error: 'error'})
    } finally{
        this.setState({isLoading: false})
    }
  }

  render() {

    const options = this.state.breeds.map(breed => ({
        value: breed.id,
        label: breed.name

    }))

    return (
      <div>
        <Select options={options} isLoading={this.state.isLoading} onChange={option => this.props.onSelect(option.value)} />
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
