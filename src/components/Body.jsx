import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, useNavigate} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])
const Body = () => {  
  return (
    <div className='w-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body