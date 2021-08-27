import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Dashboard",
  },
  {
    id: 2,
    url: "/addplayers",
    text: "Add Players",
  },
  {
    id: 3,
    url: "/addofficials",
    text: "Add Officials",
  },
  {
    id: 4,
    url: "/manage",
    text: "Manage and Print",
  },
  {
    id: 5,
    url: "/logout",
    text: "Logout",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: <FaBehance />,
  },
];
