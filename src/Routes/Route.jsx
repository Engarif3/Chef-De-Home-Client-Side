import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Akhi from "../akhi";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Private from "../Private";
import PrivateRoute from "./PrivateRoute";
import Home from "../Home";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Akhi></Akhi>
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
