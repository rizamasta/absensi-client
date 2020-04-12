import {
  Home,
  UserLogin,
  Absensi,
  HistoryPage,
  Profile,
  ChangePassword,
  About,
  TNCPage,
  FAQ,
  AbsensiReport,
} from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/home/about",
    exact: true,
    component: About,
  },
  {
    path: "/home/faq",
    exact: true,
    component: FAQ,
  },
  {
    path: "/home/termcondition",
    exact: true,
    component: TNCPage,
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
    path: "/user/report",
    exact: true,
    component: AbsensiReport,
  },
  {
    path: "/user/profile/change-password",
    exact: true,
    component: ChangePassword,
  },
];
export { routes };
