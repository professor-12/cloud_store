import Header from "./components/Header"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Auth from './pages/Auth'
import SignUp from "./pages/SignUp"
import Home from "./pages/home"
import ProtectRoute from "./components/ProtectRoute"
import HomeIndex from "./pages/home.index"
import File from "./pages/File"
import MyStorage from "./pages/myStorage"
import { Toaster } from "react-hot-toast"
import Profile from "./pages/Profile"
import FileContext from "./context/file-context"
import Starred from "./pages/Starred"
import Search from "./pages/Search"
import Spam from "./pages/Spam"
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: "", element:
        <Homepage></Homepage>
      , children: [
      ]
    },
    {
      path: "/home", element:
        <ProtectRoute>
          <Home />
        </ProtectRoute>
      , children: [
        {
          index: true,
          element: <HomeIndex />
        },
        {
          path: "create-file",
          element: <File />
        },
        {
          path: "search",
          element: <Search />
        },
        {
          path: "star",
          element: <Starred />
        },
        {
          path: "my-file",
          element: <MyStorage />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "spam",
          element: <Spam />
        },

      ]
    },

    {
      path: "auth", element: <Auth />, children:
        [
          {
            path: "login", element: <Login />
          },
          {
            path: "sign-up", element: <SignUp />
          }
        ]
    },
    {
      path: "*", element: <Auth />
    },


  ])

  return <>
    <Toaster />
    <RouterProvider router={routes}></RouterProvider>
  </>
}

export default App


/**
 * /login,
 * /onboarding,
 * /console,
 * /register,
 * /
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */