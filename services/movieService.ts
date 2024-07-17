// services/movieService.ts
import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzI5MGUzYmUwNzQ5NGJjYjAwNTg4NWExOGZjMmExNiIsIm5iZiI6MTcyMTEzNTA5Ni41Mzc4MDMsInN1YiI6IjY2OTY2YmZkZDczMmFhZDU5NzI3NWZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._sufrMzWIay7ivJj4FVzn7AxCUMk2_4XLSY9zBQIPks';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const movieService = {
  getNowPlaying: async () => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/now_playing?language=en-US&page=1`);
    return data;
  },
  getPopular: async () => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/popular?language=en-US&page=1`);
    return data;
  },
  getUpcoming: async () => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/upcoming?language=en-US&page=1'`);
    return data;
  },
  getMovieDetail: async (id: string) => {
    const { data } = await axiosInstance.get(`${BASE_URL}/movie/${id}?language=en-US&page=1`);
    console.log(data);
    return data;
  },
};

export default movieService;