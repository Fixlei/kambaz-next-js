import Link from "next/link";

// Shared Tailwind classes: labels sit above full-width controls
const labelClass = "mb-1 block text-sm font-semibold";
const controlClass = "w-full rounded border border-neutral-300 px-3 py-2";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  // cid is needed so Cancel and Save can return to this course's assignment list
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={labelClass}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={controlClass} />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className={labelClass}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          className={controlClass}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-points" className={labelClass}>
          Points
        </label>
        <input id="wd-points" type="number" defaultValue={100} className={controlClass} />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-group" className={labelClass}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="assignment" className={controlClass}>
          <option value="assignment">ASSIGNMENTS</option>
          <option value="quiz">QUIZZES</option>
          <option value="exam">EXAMS</option>
          <option value="project">PROJECT</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-display-grade-as" className={labelClass}>
          Display Grade As
        </label>
        <select id="wd-display-grade-as" defaultValue="percentage" className={controlClass}>
          <option value="points">Points</option>
          <option value="percentage">Percentage</option>
          <option value="letter">Letter</option>
        </select>
      </div>
      {/* Submission type with its online entry options grouped in one bordered box */}
      <div className="mb-4 rounded border border-neutral-300 p-4">
        <label htmlFor="wd-submission-type" className={labelClass}>
          Submission Type
        </label>
        <select id="wd-submission-type" defaultValue="ONLINE" className={`${controlClass} mb-4`}>
          <option value="ONLINE">Online</option>
          <option value="PAPER">ON PAPER</option>
          <option value="NONE">No Submission</option>
        </select>
        <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" defaultChecked />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
      </div>
      {/* Assign section: who, due date, and the availability window */}
      <div className="mb-4 rounded border border-neutral-300 p-4">
        <div className="mb-3 text-sm font-semibold">Assign</div>
        <div className="mb-4">
          <label htmlFor="wd-assign-to" className={labelClass}>
            Assign to
          </label>
          <input id="wd-assign-to" type="text" defaultValue="Everyone" className={controlClass} />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-due-date" className={labelClass}>
            Due
          </label>
          <input id="wd-due-date" type="date" defaultValue="2026-09-27" className={controlClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wd-available-from" className={labelClass}>
              Available from
            </label>
            <input
              id="wd-available-from"
              type="date"
              defaultValue="2026-09-14"
              className={controlClass}
            />
          </div>
          <div>
            <label htmlFor="wd-available-until" className={labelClass}>
              Until
            </label>
            <input
              id="wd-available-until"
              type="date"
              defaultValue="2026-09-27"
              className={controlClass}
            />
          </div>
        </div>
      </div>
      {/* With AI: sample field */}
      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={labelClass}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={controlClass} />
      </div>
      <hr className="mb-3 border-neutral-300" />
      {/* Cancel and Save both return to the assignment list */}
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
