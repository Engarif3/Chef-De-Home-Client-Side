import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Chefs from "../Chefs/Chefs";
import ViewRecipe from "../Chefs/ViewRecipe";
import Blog from "./Blog/Blog";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Chefs></Chefs>,
                loader:() => fetch("http://localhost:5000/chefs")
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
                loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }

]);

export default router;
