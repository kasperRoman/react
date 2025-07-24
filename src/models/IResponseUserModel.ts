import { IUser } from "./IUserModel";

export interface IResponseUserModel{

 users:IUser[],
 total:number,
 skip:number,
 limit:number

}