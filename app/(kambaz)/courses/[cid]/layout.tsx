"use client";

import { ReactNode, useEffect, useState } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { FaAlignJustify } from "react-icons/fa6";
import { useCoursesStore } from "../../store/coursesStore";
import { redirect, useParams } from "next/navigation";
import { useAccountContext } from "../../account/AccountContext";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import * as client from "../client";

// Shared layout for course pages: every route under /courses/[cid] (home, modules, etc.) renders inside it
export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode; // Page content of the current child route
}>) {
  // Extract the course ID from the dynamic route
  const { cid: courseId } = useParams<{ cid: string }>();
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const course = courses.find((c) => c._id === courseId);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setEnrollments(await client.findMyEnrollments());
        setCourses(await client.findMyCourses());
      } catch {
        setEnrollments([]);
      }
      setLoaded(true);
    };
    load();
  }, [currentUser, setEnrollments, setCourses]);

  const enrolled = enrollments.some(
    (e) => e.user === currentUser?._id && e.course === courseId,
  );
  if (loaded && currentUser && !enrolled) {
    redirect("/dashboard");
  }

  return (
    <div id="wd-courses">
      <h2 className="text-2xl text-red-600 font-semibold">
        <FaAlignJustify
          className="me-4 mb-1 inline text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
      </h2>
      <hr className="my-3" />
      {/* Two-column layout: course navigation on the left, page content on the right */}
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
