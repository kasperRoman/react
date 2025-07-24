import { IPost } from './IPostModel';

export interface IResponsePostModel {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number
}