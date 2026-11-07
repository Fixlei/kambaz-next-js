"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "@/app/(kambaz)/store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: cid },
  );
  const save = () => {
    if (existing) {
      updateAssignment(assignment);
    } else {
      addAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };
  const cancel = () => router.push(`/courses/${cid}/assignments`);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <br />
      {/* With AI: show the assignment id from the URL */}
      <br />
      Assignment id: {aid}
      <br />
      <br />
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        rows={8}
        className="w-full"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={assignment.due}
                onChange={(e) =>
                  setAssignment({ ...assignment, due: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-availabel-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button type="button" id="wd-cancel" onClick={cancel}>
        Cancel
      </button>{" "}
      <button type="button" id="wd-save" onClick={save}>
        Save
      </button>
    </div>
  );
}
