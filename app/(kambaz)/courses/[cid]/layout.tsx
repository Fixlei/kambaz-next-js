import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../database";
import { FaAlignJustify } from "react-icons/fa6";
import { Coral_Pixels } from "next/font/google";

// Shared layout for course pages: every route under /courses/[cid] (home, modules, etc.) renders inside it
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode; // Page content of the current child route
  params: Promise<{ cid: string }>; // Dynamic route params (a Promise in this Next.js version)
}>) {
  // Extract the course ID from the dynamic route
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="p-4 text-2xl text-red-600 font-semibold">
        <FaAlignJustify className="me-4 mb-1 inline text-xl" />
        <Breadcrumb course={course} /> ({course?._id}){cid}
      </h2>
      <hr />
      {/* Two-column layout: course navigation on the left, page content on the right */}
      <div className="flex gap-4">
        {/* Course navigation: fixed 140px width, never shrinks; hidden on small screens, shown at md and up */}
        <div className="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation cid={cid} />
        </div>
        {/* Content area: fills remaining width; min-w-0 keeps wide content (e.g. tables) from overflowing */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
