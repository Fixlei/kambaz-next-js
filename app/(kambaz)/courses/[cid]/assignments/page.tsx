// Assignments page for a specific course
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
  ];

  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      {/* h3 wd-assignments-title */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
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
