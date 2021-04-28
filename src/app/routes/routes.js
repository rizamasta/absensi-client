import DataPegawaiPage from "app/pages/pegawai";
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
  KinerjaPage,
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
    path: "/user/kinerja",
    exact: true,
    component: KinerjaPage,
  },
  {
    path: "/user/data",
    exact: true,
    component: DataPegawaiPage,
  },
  {
    path: "/user/profile/change-password",
    exact: true,
    component: ChangePassword,
  },
];
export { routes };
