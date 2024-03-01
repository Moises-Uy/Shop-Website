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
    icon: <Icon icon="icon-park-outline:shopping" />,
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
    icon: <Icon icon="iconamoon:profile" />,
  },

  {
    title: "Setting",
    path: "/setting",
    icon: <Icon icon="ep:setting" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/setting/account" },
      { title: "Privacy", path: "/setting/privacy" },
    ],
  },
];
