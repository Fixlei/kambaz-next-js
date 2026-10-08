// Assignments page for a specific course
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  // Due-date / points blurb under each title (dates from the course calendar)
  const assignments = [
    {
      aid: "A1",
      title: "A1 - HTML",
      details:
        "Multiple Modules | Not available until Sep 14 at 12:00am | Due Sep 27 at 11:59pm | 100 pts",
    },
    {
      aid: "A2",
      title: "A2 - CSS & TailWind",
      details:
        "Multiple Modules | Not available until Sep 27 at 12:00am | Due Oct 11 at 11:59pm | 100 pts",
    },
    {
      aid: "A3",
      title: "A3 - JavaScript",
      details:
        "Multiple Modules | Not available until Oct 11 at 12:00am | Due Oct 25 at 11:59pm | 100 pts",
    },
    // My own extra assignment
    {
      aid: "FP",
      title: "Final Project - Full Stack Next.js App",
      details:
        "Multiple Modules | Not available until Oct 26 at 12:00am | Due Dec 6 at 11:59pm | 100 pts",
    },
    // With AI: sample assignment
    {
      aid: "ai-a",
      title: "A9 - Sample assignment",
      details:
        "Multiple Modules | Not available until Nov 1 at 12:00am | Due Nov 8 at 11:59pm | 100 pts",
    },
  ];

  return (
    <div id="wd-assignments">
      {/* Search field on the left, + Group / + Assignment on the right */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      {/* Gray group header, same treatment as a module title */}
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-2 py-0.5 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map(({ aid, title, details }) => (
          <AssignmentItem
            key={aid}
            cid={cid}
            aid={aid}
            title={title}
            details={details}
          />
        ))}
      </ul>
    </div>
  );
}
