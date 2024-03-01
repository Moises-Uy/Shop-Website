import { Icon } from "@iconify/react";
import { SideNav } from "./types";

export const SIDENAV_ITEMS: SideNav[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="material-symbols:space-dashboard" />,
  },

  {
    title: "Shop",
    path: "/shop",
    icon: <Icon icon="material-symbols:space-dashboard" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Cart",
        path: "/shop/cart",
      },
    ],
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <Icon icon="material-symbols:space-dashboard" />,
  },

  {
    title: "Setting",
    path: "/setting",
    icon: <Icon icon="material-symbols:space-dashboard" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/setting/account" },
      { title: "Privacy", path: "/setting/privacy" },
    ],
  },
];
