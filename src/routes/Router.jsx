import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";



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
                path: "/job/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
                element: <PrivateRoute><JobDetails /></PrivateRoute>
            },
            {
                path: "/job-apply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default router
