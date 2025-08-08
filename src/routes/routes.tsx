import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
       { index:true ,element:<HomePage/>},
       {path:'movies',element:<Movies/>},
       {path:'TvSeries',element:<TvSeries/>},
       {path:'movieDetailsPage/:id',element:<MovieDetailsPage/>}
    ]}

],{
    basename:'/react'
});