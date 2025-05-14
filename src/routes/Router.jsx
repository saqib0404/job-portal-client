import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import JobApplications from "../pages/JobApplications/JobApplications";
import PostedJobs from "../pages/PostedJobs/PostedJobs";
import AddJob from "../pages/AddJob/AddJob";
import Applicants from "../pages/Applicants/Applicants";



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
                loader: ({ params }) => fetch(`https://job-portal-server-three-gamma.vercel.app/job/${params.id}`),
                element: <PrivateRoute><JobDetails /></PrivateRoute>
            },
            {
                path: "/add-job",
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: "/posted-jobs",
                element: <PrivateRoute><PostedJobs /></PrivateRoute>
            },
            {
                path: "/posted-jobs/:job_id",
                loader:({params})=>fetch(`https://job-portal-server-three-gamma.vercel.app/posted-jobs/${params.job_id}`),
                element: <PrivateRoute><Applicants /></PrivateRoute>
            },
            {
                path: "/job-apply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: "/job-applications",
                element: <PrivateRoute><JobApplications /></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default router
