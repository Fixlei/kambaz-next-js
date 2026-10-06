"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

//Each label builds its own path (/courses/{cid}/{label}) and id (wd-course-{label}-link).
const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => {
        const path =
          link === "People"
            ? `/courses/${cid}/people/table`
            : `/courses/${cid}/${link.toLowerCase()}`;
        const active = pathname === path || pathname.startsWith(path + "/");
        return (
          <Link
            key={link}
            href={path}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={
              active
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
