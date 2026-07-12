import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '56613095-299ca1a4c8e67ddfc9e7ec421';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get('', {
    params: {
      key: PIXABAY_API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });
  return response.data;
}
