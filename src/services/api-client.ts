import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '401e5d861e3f4bd19027a5faef54ea27'
    }
})