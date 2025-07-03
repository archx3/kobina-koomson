import { ADDRESS_DATA } from "@/config/address";

export const HOME_NAV_TABLE = [
  // { name: 'Home', link: '#app', icon: 'home.svg' },
  // { name: 'About', link: '#about-section', icon: 'help.svg' },
  // { name : 'Blog', link : '#blog-section', icon : 'blog.svg' },
  // { name: 'Customers', link: '#customers', icon: 'happy-client.svg' },
  { name: "Resume", link: "/resume", icon: "headset.svg" },
  { name: "Portfolio", link: "/portfolio", icon: "picture.svg" },
  { name: "Contact", link: "/contact", icon: "headset.svg" }
];

export const EXTERNAL_NAV_LIST = [
  { name: "Blog", link: "#", icon: "blog.svg" },
  { name: "Logofolio", link: "logofolio", icon: "logofolio.svg" }
];

export const EXTERNAL_LINKS = [
  {
    name: "External",
    link: "#",
    icon: "github.svg",
    children: [
      {
        name: "Github",
        link: ADDRESS_DATA.social.github,
        icon: "github.svg"
      },
      {
        name: "LinkedIn",
        link: ADDRESS_DATA.social.linkedin,
        icon: "github.svg"
      },
      {
        name: "Behance",
        link: ADDRESS_DATA.social.behance,
        icon: "github.svg"
      }
      // {
      //   name : 'Freepik',
      //   link : 'https://github.com/archX3',
      //   icon : 'github.svg',
      // },
    ]
  }
];
