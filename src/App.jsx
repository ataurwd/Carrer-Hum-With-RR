import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Applied from "./components/Applied";
import Blog from "./components/Blog";
import Nav from "./components/Nav";
function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: () => fetch('categories.json'),
        },
        {
          path:'/home',
          element: <Home/>,
        },
        {
          path: "/applied",
          element: <Applied/>
        },
        {
          path: '/blog',
          element: <Blog/>
        }
      ]
    }
  ])

  return (
    <div>
     <RouterProvider router={route}/>
    </div>
  )
}

export default App
