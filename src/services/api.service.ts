// import { ITodo } from "../models/ITodoModel";
// import { IUser } from "../models/IUserModel";

// export const getUsers = async():Promise<IUser[]> =>{
//  let response:IUser[] = await    fetch('https://jsonplaceholder.typicode.com/users')
//          .then(value =>value.json())
//          return response
// };

// export const getTodos =async(user:IUser):Promise<ITodo[]> =>{
//     let response:ITodo[] = await      fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
//              .then(value =>value.json())
//              return response
// }

import axios from'axios'
import { IUser } from '../models/IUserModel'
import { ITodo } from '../models/ITodoModel';


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type":"application/json"}
})


 export const getUsers = async():Promise<IUser[]> =>{
let axiosResponse = await axiosInstance.get<IUser[]>('/users');
return axiosResponse.data
}

export const getTodos =async(user:IUser):Promise<ITodo[]> =>{
    let axiosResponse = await axiosInstance.get<ITodo[]>('/todos' ,{ params:{userId: user.id}
    })
             
          return axiosResponse.data 
}