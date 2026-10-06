"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["Signin", "Signup", "Profile"];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => {
        const path = `/account/${link.toLowerCase()}`;
        return (
          <Link
            key={link}
            href={path}
            id={`wd-account-${link.toLowerCase()}-link`}
            className={
              pathname === path
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
