import {
  Home,
  UserLogin,
  Absensi,
  HistoryPage,
  Profile,
  ChangePassword,
} from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/user/login",
    exact: true,
    component: UserLogin,
  },
  {
    path: "/user/absen",
    exact: true,
    component: Absensi,
  },
  {
    path: "/user/history",
    exact: true,
    component: HistoryPage,
  },
  {
    path: "/user/profile",
    exact: true,
    component: Profile,
  },
  {
    path: "/user/profile/change-password",
    exact: true,
    component: ChangePassword,
  },
];
export { routes };
