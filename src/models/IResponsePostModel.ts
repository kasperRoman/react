import { IPost } from "./IPostModel";

export interface IResponsePost {
    posts:IPost[],
    tptal:number,
    skip:number,
    limit:number
}