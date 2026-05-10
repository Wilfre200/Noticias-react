import axios from 'axios';

const API_KEY =
    import.meta.env.VITE_API_KEY;

const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const getNews = async(category = 'technology') => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                country: 'us',
                category,
                apiKey: API_KEY,
            },
        });

        return response.data.articles;
    } catch (error) {
        console.error('Error obteniendo noticias:', error);
        return [];
    }
};