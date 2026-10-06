"use client";
//Kambaz main sidebar: each link is an icon-and-label tile (React Icons + Tailwind).
//The <nav> is pinned to the window (fixed top-0 bottom-0), 120px wide, and only shown at md and up.
//The layout's wd-main-content-offset leaves 120px so page content is not covered.
//Only the tile matching the current URL (usePathname) is white; the rest stay black.

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { BsQuestionCircle } from "react-icons/bs";
import { PiVideoConference } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { FaInbox } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";

const links = [
  {
    label: "Account",
    path: "/account",
    icon: FaRegCircleUser,
    id: "wd-account-link",
    avatar: "/images/avatar.jpg", // profile photo; remove this line to fall back to the icon
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: AiOutlineDashboard,
    id: "wd-dashboard-link",
  },
  {
    label: "Courses",
    path: "/courses",
    icon: LiaBookSolid,
    id: "wd-courses-link",
  },
  {
    label: "Groups",
    path: "/groups",
    icon: HiOutlineUsers,
    id: "wd-groups-link",
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: IoCalendarOutline,
    id: "wd-calendar-link",
  },
  { label: "Inbox", path: "/inbox", icon: FaInbox, id: "wd-inbox-link" },
  {
    label: "History",
    path: "/history",
    icon: GoHistory,
    id: "wd-history-link",
  },
  {
    label: "Studio",
    path: "/Studio",
    icon: PiVideoConference,
    id: "wd-studio-link",
  },
  { label: "Help", path: "/help", icon: BsQuestionCircle, id: "wd-help-link" },
];

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        id="wd-neu-link"
        href="https://www.northeastern.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="block py-3 text-center text-sm text-white no-underline"
      >
        <img className="wd-logo"
          src="/images/neu.png"
          alt="Northeastern University Logo"
        />
      </a>
      {links.map((link) => {
        const active =
          pathname === link.path || pathname.startsWith(link.path + "/");
        return (
          <Link
            key={link.path}
            href={link.path}
            id={link.id}
            className={
              active
                ? "block bg-white py-3 text-center text-sm text-red-600 no-underline" // selected: white tile, red text
                : "block bg-black py-3 text-center text-sm text-white no-underline" // idle: black tile, white text
            }
          >
            {link.avatar ? (
              // round avatar, like Canvas .ic-avatar: fixed square + rounded-full + object-cover
              <img
                src={link.avatar}
                alt="Account avatar"
                className="inline-block h-[30px] w-[30px] rounded-full object-cover"
              />
            ) : (
              <link.icon className="inline-block text-3xl text-red-600" />
            )}
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
