import Module from "./Module";
import Lesson from "./Lesson";

// Modules list (also reused by the course Home screen).
// Structure from Chapter 1 (weeks -> lessons -> content items), toolbar styled in Chapter 2.
export default function Modules() {
  return (
    <div>
      {/* Toolbar: light borders on the secondary controls, red + Module button */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        {/* Week 2 expanded on my own, including a lesson with my own title */}
        <Module title="Week 2">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Style elements with CSS selectors and the box model
            </li>
            <li className="wd-content-item">
              Restyle Kambaz with Tailwind utility classes
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Chapter 2 - Styling User Interfaces with CSS and Tailwind
            </li>
          </Lesson>
          <Lesson title="MY PRACTICE NOTES">
            <li className="wd-content-item">
              Lab 2 - CSS, React Icons, and Tailwind samples
            </li>
            <li className="wd-content-item">
              A2 - Restyle Kambaz to look like Canvas
            </li>
          </Lesson>
        </Module>
        <Module title="Week 3" />
        {/* With AI: sample module */}
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)" />
        </Module>
      </ul>
    </div>
  );
}
