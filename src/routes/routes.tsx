import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePages from "../pages/HomePages";
import TodosPages from "../pages/TodosPages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {index:true,element:<HomePages/>},
        {path:'todos',element:<TodosPages/>}
    ]
  }
]);