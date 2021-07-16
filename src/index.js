import axios from 'axios';
import 'regenerator-runtime/runtime';
export const API_KEY = 'a5837db97d72016c81a7a776f4240db9';

export const API_URL = 'https://gateway.marvel.com/v1/public/';

export const URL_COMICS = 'comics';
export const URL_CHARACTERS = 'characters';

class GetDataApi {
  async getData(url) {
      try {
          const response = await axios.get(url, {
              params: {
                  apikey: API_KEY,
                  limit: 100
              }
          });

          return response.data.data.results;
      } catch (error) {
          console.log(error.message);
          return false;
      }
  }
}

const getDataApi = new GetDataApi();

(async () => {
  const data = await getDataApi.getData(API_URL + URL_COMICS);
  console.log(data);
})();