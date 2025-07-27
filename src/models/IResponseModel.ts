import { IPopularMovie } from "./IPopularMovie";

export interface IResponseModel  {
    page:number,
    results:IPopularMovie[],
    tatal_pages:number,
    total_results:number
}