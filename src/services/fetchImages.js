import axios from 'axios';

const API_KEY = '21195458-19b2d8fc62244b43de198b4d0';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImagesWithQuery = (searchParam, page) => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    q: searchParam,
    page: page,
    per_page: 12,
    key: API_KEY,
  });
  return axios.get(`${BASE_URL}?${searchParams}`);
};

export { fetchImagesWithQuery };
