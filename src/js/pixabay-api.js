import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://pixabay.com',
    params: {
        key: '56113716-8c020b23e7503bfe8f17bb94f',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
    },
});


export const getImagesByQuery = async (query, page) => {
    const res = await axiosInstance.get('/api/', {
        params: {
            q: query,
            page: page,
        }
    });
    return res.data;
};

