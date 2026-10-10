"use client";
//Kambaz main sidebar: each link is an icon-and-label tile (React Icons + Tailwind).
//The <nav> is pinned to the window (fixed top-0 bottom-0), 120px wide, and only shown at md and up.
//The layout's wd-main-content-offset leaves 120px so page content is not covered.
//Only the tile matching the current URL (usePathname) is white; the rest stay black.
//Icons are red, except Account, which is white on the black tile.

import { AiOutlineDashboard } from "react-icons/ai";
import { FaCircleQuestion, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { BsQuestionCircle } from "react-icons/bs";
import { PiVideoConference } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { FaInbox } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

// match: the path prefix that highlights the tile, when it differs from where the link goes
const links = [
  {
    label: "Account",
    path: "/account",
    icon: FaRegCircleUser,
    id: "wd-account-link",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: AiOutlineDashboard,
    id: "wd-dashboard-link",
  },
  {
    // Courses opens the course list on the Dashboard, and lights up inside any course
    label: "Courses",
    path: "/dashboard",
    match: "/courses",
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
    path: "/studio",
    icon: PiVideoConference,
    id: "wd-studio-link",
  },
  { label: "Labs", path: "/labs", icon: LiaCogSolid, id: "wd-labs-link" },
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="wd-logo mx-auto"
          src="/images/neu.png"
          alt="Northeastern University Logo"
        />
      </a>
      {links.map((link) => {
        const match = link.match ?? link.path;
        const active = pathname === match || pathname.startsWith(match + "/");
        // Account's icon is white on the black tile; it turns red with the rest when selected
        const iconColor =
          link.label === "Account" && !active ? "text-white" : "text-red-600";
        return (
          <Link
            key={link.id}
            href={link.path}
            id={link.id}
            className={
              active
                ? "block bg-white py-3 text-center text-sm text-red-600 no-underline" // selected: white tile, red text
                : "block bg-black py-3 text-center text-sm text-white no-underline" // idle: black tile, white text
            }
          >
            <link.icon className={`inline-block text-3xl ${iconColor}`} />
            <br />
            {link.label}
          </Link>
        );
      })}
      {/* With AI: sample tile, always shown with the idle black/white classes */}
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Lab Help
      </Link>
    </nav>
  );
}
