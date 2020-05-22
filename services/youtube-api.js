import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: process.env.API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default youtubeSearch;
