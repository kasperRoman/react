import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import HomePage from "../pages/HomePage";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import Adminlayout from "../layouts/Adminlayout";

export const routes =createBrowserRouter([
    {path:'/', element:<MainLayout/> , children:[
        {index:true,element:<HomePage/>},
     {path:'page1',element:<Page1/>},
     {path:'page2',element:<Page2/>}
    ],
    errorElement:<CustomErrorLayout/>
},
{path:'/admin',element:<Adminlayout/>}
])