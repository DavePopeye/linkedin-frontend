import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import SignOut from "../pages/Auth/SignOut";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AuthLayout from "../layout/AuthLayout";

export default [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
    exact: true,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: AuthLayout,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    layout: AuthLayout,
    exact: true,
  },
  {
    path: "/signout",
    component: SignOut,
    layout: MainLayout,
    exact: true,
  },
  /*   {
        path:"/davide",
        component:Home,
        layout:MainLayout,
    }*/
];
