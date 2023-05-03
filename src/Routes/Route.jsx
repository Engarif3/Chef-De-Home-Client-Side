import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Chefs from "../Chefs/Chefs";
import ViewRecipe from "../Chefs/ViewRecipe";
import Blog from "./Blog/Blog";
import ErrorPage from "../Section/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Chefs></Chefs>,
                loader:() => fetch("https://assignment-server-engarif3.vercel.app/chefs")
            },
            {
                path:"/login",
                element:<Login></Login> 
            },
            {
                path:"/register",
                element:<Register></Register>

            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"chef/:id",
                element:<PrivateRoute>
                    <ViewRecipe></ViewRecipe>
                </PrivateRoute>,
                loader:({params}) => fetch(`https://assignment-server-engarif3.vercel.app/chefs/${params.id}`)
            }
        ]
    }

]);

export default router;
