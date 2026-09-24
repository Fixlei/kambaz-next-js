import Link from "next/link";
// Labs sidebar: links to each lab, shown on every /labs page via app/labs/layout.tsx.
// TOC: table of contents

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>
      <li>
        <Link href="/labs/lab1">Lab 1: HTML</Link>
      </li>
      <li>
        <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
      </li>
      <li>
        <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
      </li>
      <li>
        <Link href="/labs/lab4">Lab 4: More JavaScript</Link>
      </li>
      <li>
        <Link href="/labs/lab5">Lab 5： Express REST APIs</Link>
      </li>
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li>
        <Link id="wd-toc-book-link" href="/book/ch1">
          Chapter 1 HTML
        </Link>
      </li>
    </ul>
  );
}
