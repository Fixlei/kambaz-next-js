import Link from "next/link";

// Labs index at /labs: uses Next.js Link so each lab opens without a full page reload.
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Minghua Lei</h2>
      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4: More JavaScript
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">
            Lab 5: Express REST APIs
          </Link>
        </li>
      </ul>
    </div>
  );
}
