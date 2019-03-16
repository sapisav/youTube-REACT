import axios from 'axios';

const KEY = 'AIzaSyDYR3qK6poIf3DAH2WT4Wg8_q8Em6pN0f0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});