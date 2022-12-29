import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AboutPopup from "../Pages/About/AboutPopup/AboutPopup";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginProcess/Login";
import SignUp from "../Pages/LoginProcess/SignUp";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import ShowPost from "../Pages/Posts/ShowPost";
import ShowAllPost from "../Pages/ShowAllPost/ShowAllPost";
import PrivateRoute from "./PrivateRoutes";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/media',
                element: <PrivateRoute><Media></Media></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/posts')
            },
            {
                path: '/about',
                element: <About></About>,
                loader : () => fetch('http://localhost:5000/userInfo')
            },
            {
                path: '/updateUser',
                element: <AboutPopup></AboutPopup>,
                loader : () => fetch('http://localhost:5000/updateUser')
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/showpost',
                element: <ShowPost></ShowPost>
               
            },
            {
                path: '/showallpost',
                element: <ShowAllPost></ShowAllPost>
               
            },
            {
                path: '*',
                element: <div><h2>Not found page</h2></div>
               
            }
           
           
           
           
        ]
    }
])