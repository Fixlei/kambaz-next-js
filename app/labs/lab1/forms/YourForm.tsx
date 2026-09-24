"use client";

export default function YourForm() {
  return (
    <div id="wd-your-form-section">
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Name and login</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input type="text" id="wd-your-first-name" defaultValue="Minghua" />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input type="text" id="wd-your-last-name" defaultValue="Lei" />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          type="password"
          id="wd-your-student-id"
          placeholder="Enter your NUID"
        />
        <br />

        <h5>About me</h5>
        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={50}
          rows={4}
          defaultValue="I'm from China and now live in Boston. I want to become a full-stack web developer and build real projects with React and Next.js, while keeping a good GPA."
        />
        <br />

        <h5>Class standing</h5>
        <input type="radio" name="wd-your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-junior" />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label>

        <h5>Enrollment</h5>
        <input
          type="radio"
          name="wd-your-enrollment"
          id="wd-your-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <br />
        <input type="radio" name="wd-your-enrollment" id="wd-your-part-time" />
        <label htmlFor="wd-your-part-time">Part-time</label>

        <h5>Interests</h5>
        <input type="checkbox" id="wd-your-interest-ts" defaultChecked />
        <label htmlFor="wd-your-interest-ts">TypeScript</label>
        <br />
        <input type="checkbox" id="wd-your-interest-react" defaultChecked />
        <label htmlFor="wd-your-interest-react">React / Next.js</label>
        <br />
        <input type="checkbox" id="wd-your-interest-node" />
        <label htmlFor="wd-your-interest-node">Node.js back ends</label>
        <br />
        <input type="checkbox" id="wd-your-interest-fullstack" defaultChecked />
        <label htmlFor="wd-your-interest-fullstack">
          Full-stack developer career
        </label>

        <h5>Program</h5>
        <label htmlFor="wd-your-major">Major: </label>
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Systems</option>
          <option value="SE">Software Engineering</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
        <br />
        <select
          multiple
          id="wd-your-topics"
          defaultValue={["REACT", "NODE"]}
        >
          <option value="HTML">HTML and CSS</option>
          <option value="REACT">React</option>
          <option value="NODE">Node.js and Express</option>
          <option value="MONGO">MongoDB</option>
          <option value="DEPLOY">Deployment</option>
        </select>

        <h5>Details</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          id="wd-your-email"
          defaultValue="lei.min@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2025}
          max={2032}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input type="date" id="wd-your-start-date" defaultValue="2025-09-02" />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0–10):{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          min={0}
          max={10}
          defaultValue={9}
        />
        <br />
        <br />

        <button type="submit" id="wd-your-save">
          Save
        </button>{" "}
        <button type="button" id="wd-your-cancel">
          Cancel
        </button>
      </form>
    </div>
  );
}
