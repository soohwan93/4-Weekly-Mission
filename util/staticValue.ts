import { v4 as uuidv4 } from "uuid";

export const USER_INITIAL_VALUE = {
  id: 0,
  email: "",
  image_source: "",
};

export const FOOTER_LOGO_DATA = [
  {
    id: uuidv4(),
    href: "https://www.facebook.com/",
    target: "facebook",
    src: "/facebook-logo.svg",
    alt: "facebook-logo",
  },
  {
    id: uuidv4(),
    href: "https://twitter.com/",
    target: "twitter",
    src: "/twitter-logo.svg",
    alt: "twitter-logo",
  },
  {
    id: uuidv4(),
    href: "https://www.youtube.com/",
    target: "youtube",
    src: "/youtube-logo.svg",
    alt: "youtube-logo",
  },
  {
    id: uuidv4(),
    href: "https://www.instagram.com/",
    target: "instagram",
    src: "/instafram-logo.svg",
    alt: "instafram-logo",
  },
];

export const LINKS_INITIAL_DATA = {
  createdAt: "",
  description: "",
  id: 0,
  imageSource: "",
  title: "",
  url: "",
};
