// Assignments page for a specific course
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const assignments = [
    { aid: "A1", title: "A1 - HTML", details: "Details for Assignment 1" },
    { aid: "A2", title: "A2 - CSS & TailWind", details: "Details for Assignment 2" },
    { aid: "A3", title: "A3 - JavaScript", details: "Details for Assignment 3" },
  ];

  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      {/* h3 wd-assignments-title */}
      <h3 className="wd-assignments-title">
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
