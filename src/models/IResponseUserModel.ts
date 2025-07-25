import { IUser } from "./IUserModel";

export interface IResponseUserModel {
    users:IUser[],
    tptal:number,
    skip:number,
    limit:number
}