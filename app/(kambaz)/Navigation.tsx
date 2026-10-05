"use client";
//Kambaz main sidebar: each link is an icon-and-label tile (React Icons + Tailwind).
//The <nav> is pinned to the window (fixed top-0 bottom-0), 120px wide, and only shown at md and up.
//The layout's wd-main-content-offset leaves 120px so page content is not covered.

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      {/* Idle tile: black background, white text, red icon */}
      <Link
        href="/account"
        id="wd-account-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-red-500" />
        <br />
        Account
      </Link>
      {/* Active tile: white background, red text and icon */}
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link
        href="/courses"
        id="wd-courses-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
    </nav>
  );
}