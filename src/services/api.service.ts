import { ITodo } from "../models/ITodoModel";
import { IUser } from "../models/IUserModel";

export const getUsers = async():Promise<IUser[]> =>{
 let response:IUser[] = await    fetch('https://jsonplaceholder.typicode.com/users')
         .then(value =>value.json())
         return response
};

export const getTodos =async(user:IUser):Promise<ITodo[]> =>{
    let response:ITodo[] = await      fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
             .then(value =>value.json())
             return response
}
