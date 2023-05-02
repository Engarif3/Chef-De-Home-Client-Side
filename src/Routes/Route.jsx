import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Private from "../Private";
import PrivateRoute from "./PrivateRoute";
import Home from "../Home";
import Chefs from "../Chefs/Chefs";



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
                path:"/private",
                element:<PrivateRoute>
                    <Private></Private>
                </PrivateRoute>
            },
            {
                path:"/home",
                element:<Home></Home>
            }
        ]
    }

]);

export default router;
