import MainLayout from "../layout/MainLayout";
import SignOut from "../pages/Auth/SignOut";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AuthLayout from "../layout/AuthLayout";
import Me from "../pages/Me/Me";
import Certifications from "../Components/Certifications/Certifications";
import ProfilePage from "../Components/ProfilePage/ProfilePage/ProfilePage";
import Feed from "../pages/Feed/Feed";
import Profile from "../Components/ProfilePage/ProfilePage/ProfilePage";
import Ubeyt from "../pages/Ubeyt";
import OthersProfilePage from "../Components/OthersProfile/ProfilePage/OthersProfilePage";
import Search from "../pages/Search/Search";

export default [
  {
    path: "/",
    component: Feed,
    layout: MainLayout,
    exact: true,
  },
  {
    path: "/me",
    component: ProfilePage,
    layout: MainLayout,
    exact: true,
  },
  {
    path: "/profile/:id",
    component: Profile,
    layout: MainLayout,
    exact: true,
  },
  {
    path: "/ubeyt",
    component: Ubeyt,
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
  {
    path: "/davide",
    component: Certifications,
    layout: MainLayout,
    exact: true,
  },

  {
    path: "/users/:id",
    component: OthersProfilePage,
    layout: MainLayout,
    exact: true,
  },
  {
    path: "/search/:query",
    component: Search,
    layout: MainLayout,
    exact: true,
  },

  /*   {
        path:"/davide",
        component:Home,
        layout:MainLayout,
    }*/
];
