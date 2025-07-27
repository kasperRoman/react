import { IResponseModel } from '../models/IResponseModel';
import { IPopularMovie } from './../models/IPopularMovie';
import axios from "axios";



 const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY
  }
});


export const getPopularMovies = async():Promise<IPopularMovie[]>=>{
    const response = await axiosInstance.get<IResponseModel>('/movie/popular')
    return response.data.results
}