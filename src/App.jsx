

import { createHashRouter, Navigate, RouterProvider } from "react-router-dom"
import About from "./Components/About/About.jsx"
import Contact from "./Components/contact me/contact.jsx"
import Home from "./Components/home/Home.jsx"
import Portfolio from "./Components/Portfolio/Portfolio.jsx"
import Layout from "./Components/Layout/Layout.jsx"
import NotFound from "./Components/NotFound/NotFound.jsx"




function App() {
  const router = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "Home", element: <Navigate to="/" /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
