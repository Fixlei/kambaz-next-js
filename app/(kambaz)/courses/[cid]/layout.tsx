import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

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
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
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
