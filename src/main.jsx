import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout'
import Home from './components/Home/Home'
import Donation from './components/Donation/Donation'
import Statistics from './components/Statistics/Statistics'
import ErrorElement from './components/ErrorElement/ErrorElement'
import Card from './Card/Card'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/card/:id",
        element: <Card></Card>,
        loader: ()=>fetch('/data.json')
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
