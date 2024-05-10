import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdatedCoffee from './components/UpdatedCoffee.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App></App>
  },

  {
    path:'addCoffee',
    element:<AddCoffee></AddCoffee>
  },

  {
    path: 'updatedCoffee',
    element: <UpdatedCoffee></UpdatedCoffee>

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
