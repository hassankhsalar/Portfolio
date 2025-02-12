
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import MonsterFactory from "../pages/projects/MonsterFactory";
import BoiChai from "../pages/projects/BoiChai";
import VisaNavigator from "../pages/projects/VisaNavigator";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/monsterfactory',
          element: <MonsterFactory></MonsterFactory>
        },
        {
          path: '/boichai',
          element: <BoiChai></BoiChai>
        },
        {
          path: '/visanavigator',
          element: <VisaNavigator></VisaNavigator>
        },
      ]
    },
  ]);