import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Pages/Home/Home/Home.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AddTouristsSpot from './components/pages/AddTouristsSpot/AddTouristsSpot.jsx';
import AllTouristsSpot from './components/Pages/AllTouristsSpot/AllTouristsSpot.jsx';
import AddCountry from './components/Pages/AddCountry/AddCountry.jsx';
import CountryTouristsSpot from './components/Pages/CountryTouristsSpot/CountryTouristsSpot.jsx';
import SingleTouristsSpot from './components/Pages/SingleTouristsSpot/SingleTouristsSpot.jsx';
import PrivetRouter from './Router/PrivetRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tours')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addcuntry',
        element: <AddCountry></AddCountry>
      },
      {
        path: '/countrytouristsspot/:countryname',
        element: <CountryTouristsSpot></CountryTouristsSpot>,
        // loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.countryname}`)
      },
      {
        path: '/addtouristsspot',
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: '/alltouristsspot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/tours')
      },
      {
        path: '/tours/:id',
        element: <PrivetRouter><SingleTouristsSpot></SingleTouristsSpot></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.id}`)
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
