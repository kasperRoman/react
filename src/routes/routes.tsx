import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Page1 from "../pages/Page1";
import MovieDetailsPage from "../pages/MovieDetailsPage";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
       { index:true ,element:<HomePage/>},
       {path:'page1',element:<Page1/>},
       {path:'movieDetailsPage/:id',element:<MovieDetailsPage/>}
    ]}

]);