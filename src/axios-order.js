import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pooyas-burger.firebaseio.com/'
});

export default instance