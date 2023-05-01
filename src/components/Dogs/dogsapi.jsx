import axios from 'axios'

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
'CMlnrYCmz04m3Z1v0213E6kgnK2MkTCW'

export const fetchBreeds = async () => {
    const response = await axios.get('/breeds');
    return response.data;
  };
  
  export const fetchDogByBreed = async breedId => {
    const response = await axios.get('/images/search', {
      params: {
        breed_id: breedId,
      },
    });
    return response.data;
  };