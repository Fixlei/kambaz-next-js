"use client";
//A breadcrumb shows where you are in a nest of screens.
//Breadcrumb is a Client Component so it can read usePathname.
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { _id: string; name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/").pop() ?? "";
  // With AI: the People screen lives at /people/table, so show "People" instead of "Table"
  const label =
    section === "table"
      ? "People"
      : section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <span>
      {course?.name} ({course?._id}) &gt; {label}
    </span>
  );
}
