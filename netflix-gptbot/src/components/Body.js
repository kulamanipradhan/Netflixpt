import React from 'react'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <Signup />
        }
    ])
    return (
        <RouterProvider router={appRouter} />

    )
}

export default Body