import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProviders from './providers/AuthProviders'
import PrivateRoute from './routes/PrivateRoute'
import Orders from './components/Orders/Orders'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <AuthProviders>
        <RouterProvider router = {router}/>
      </AuthProviders>
   
  </React.StrictMode>,
)
