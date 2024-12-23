import React from 'react'

import Home from './Components/Home/Home.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AboutMain from './Components/AboutMain/AboutMain.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import Pages from './Components/Pages/Pages.jsx'
import LoginForm from './Components/LoginForm/LoginForm.jsx'
import SignupForm from './Components/SignupForm/SignupForm.jsx'
const appRouter = createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/about",
  element:<AboutMain/>
},
{
  path:"/Services",
  element:<Services/>
},
{
  path:"/Projects",
  element:<Projects/>
},
{
  path:"/Blogs",
  element:<Blogs/>
},
{
  path:"/Pages",
  element:<Pages/>
},
{
  path:"/Contact",
  element:<Contact/>
},
{
  path:"/LoginForm",
  element:<LoginForm/>
},
{
  path:"/SignupForm",
  element:<SignupForm/>
},

])
const App = () => {
  return (
    <>
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App