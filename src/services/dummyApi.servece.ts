import axios from "axios"
import { BaseResponseModel } from "../models/BaseResponcseModel"
import { IProduct } from "../models/IProductModel"
import { IRecipe } from "../models/IRecipesModul"


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})


export const getProducts = async (): Promise<IProduct[]> => {
    const axiosResponse = await axiosInstance.get<BaseResponseModel & { products: IProduct[] }>('/products')
    return axiosResponse.data.products

}

export const getRecipes = async (): Promise<IRecipe[]> => {
    const axiosResponse = await axiosInstance.get<BaseResponseModel & { recipes: IRecipe[] }>('/recipes')
    return axiosResponse.data.recipes

}

export const getProduct = async(id:string):Promise<IProduct>=>{
    const axiosResponse = await axiosInstance.get<IProduct>('/products/'+id);
    return axiosResponse.data

}