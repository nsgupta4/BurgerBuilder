import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-5dc8a.firebaseio.com/'

});
export default instance;