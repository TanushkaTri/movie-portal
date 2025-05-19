import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import RootElement from "../Root/RootElement";
import Error from "../components/Error";
import Home from "../components/Home";
import AllMovie from "../components/AllMovie";
import TvShow from "../components/TvShow";
import Blog from "../components/Blog";
import AddMovie from "../components/AddMovie";
import Myfavourite from "../components/Myfavourite";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgotPassword"; 
import AuthLayout from "../AuthLayout/AuthLayout";
import Private_Router from "./Private_Router";
import MovieDetails from "../components/MovieDetails";
import Update from "../Update/Update";
import Profile from "../components/Profile";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`https://movie-portal-server-eight.vercel.app/feturemovie`),
      },
      {
        path: "allMovie",
        element: <AllMovie />,
        loader: () =>
          fetch(`https://movie-portal-server-eight.vercel.app/addmovie`),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <Private_Router>
            <MovieDetails />
          </Private_Router>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-eight.vercel.app/addmovie/${params.id}`
          ),
      },
      {
        path: "/updateMovie/:id",
        element: (
          <Private_Router>
            <Update />
          </Private_Router>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-eight.vercel.app/addmovie/${params.id}`
          ),
      },

      {
        path: "tv",
        element: <TvShow />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "addMovie",
        element: (
          <Private_Router>
            <AddMovie />
          </Private_Router>
        ),
      },
      {
        path: "fovaurite",
        element: (
          <Private_Router>
            <Myfavourite />
          </Private_Router>
        ),
      },
      {
        path: "profile",
        element: (
          <Private_Router>
            <Profile />
          </Private_Router>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: <Login />,
      },
      {
        path: "/auth/signUp",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password", 
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
