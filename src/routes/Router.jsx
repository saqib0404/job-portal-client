import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/sign-in",
                element: <SignIn />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default router
