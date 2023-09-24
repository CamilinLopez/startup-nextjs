import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Proceso",
    path: "/proceso",
    newTab: false,
  },
  {
    id: 33,
    title: "Stack ",
    path: "/brands",
    newTab: false,
  },
  {
    id: 3,
    title: "Portafolio",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Porque nosotros",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Cómo funciona",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Planes",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 44,
        title: "Agendar",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sing Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
