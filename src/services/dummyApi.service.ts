import axios from "axios";
import { IUser } from "../models/IUserModel";
import { IResponseUserModel } from "../models/IResponseUserModel";
import { IResponsePostModel } from '../models/IResponsePostModel'
import { IPost } from "../models/IPostModel";


 const  axiosInstance =axios.create({
    baseURL:'https://dummyjson.com'
  });

  export const getUsers =async():Promise<IUser[]> =>{
    return  (await axiosInstance.get<IResponseUserModel>('/users')).data.users;
  }

  export const getPostsOfUser = async (id:number):Promise<IPost[]> =>{
    let axiosResponse = await axiosInstance.get<IResponsePostModel>('/posts/user/'+id )
    return axiosResponse.data.posts
  }