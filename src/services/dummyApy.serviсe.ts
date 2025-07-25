import axios from "axios";
import { IUser } from "../models/IUserModel";
import { IResponseUserModel } from "../models/IResponseUserModel";
import { IPost } from "../models/IPostModel";
import { IResponsePost } from "../models/IResponsePostModel";



const axiosInstance = axios.create({
   baseURL: 'https://dummyjson.com'
});

export const getUsers = async (): Promise<IUser[]> => {
   let axiosResponse = await axiosInstance.get<IResponseUserModel>('/users');
   return axiosResponse.data.users
}


export const getPostsOfUser = async (id: number): Promise<IPost[]> => {
   let axiosResponse = await axiosInstance.get<IResponsePost>('/posts/user/' + id)
   return axiosResponse.data.posts
}