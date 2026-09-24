export default function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="
        The assignment is available online Submit a link to the landing page of your Web application running on Vercel.
      "
      />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          {/** Assignment group row */}
          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="assignment">
                <option value="assignment">ASSIGNMENTS</option>
                <option value="quiz">QUIZZES</option>
                <option value="exam">EXAMS</option>
                <option value="project">PROJECT</option>
              </select>
            </td>
          </tr>
          {/* Display grade as row */}
          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="percentage">
                <option value="points">Points</option>
                <option value="percentage">Percentage</option>
                <option value="letter">Letter</option>
              </select> 
            </td>
          </tr>

          {/** Submission type row */}
          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type"> Submission type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="PAPER">ON PAPER</option>
                <option value="NONE">No Submission</option>
              </select>
            </td>
          </tr>

          {/** Online Entry Options checkboxes */}
          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>

          {/** Assign section — Assign to (wd-assign-to), Due (wd-due-date), Available from (wd-available-from), Until (wd-available-until) */}
          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input type="text" id="wd-assign-to" />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>
          {/** Cancel and Save links back to the assignments list — ids wd-cancel and wd-save */}
          <tr>
            <td colSpan={2} align="right">
              <a href="#" id="wd-cancel">Cancel</a>
              &nbsp;|&nbsp;
              <a href="#" id="wd-save">Save</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
