import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="Red"
        borderColor="silver"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Minghua Lei</h4>
        <p>
          This semester might be the <strong>last</strong>{" "}semester studying in Northeastern University — life, study, else~
          .
        </p>
        <ul>
          <li>important:build a full-stack app with Next.js</li>
          <li>important:deploy my project to Vercel</li>
          <li>important:keep a good GPA</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#d5e6d7"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>
      <HighlightedBox backgroundColor="honeydew" borderColor="seagreen">
        <h4>Sample nested content</h4>
        <ul>
          <li>p</li>
          <li>table</li>
          <li>form</li>
        </ul>
      </HighlightedBox>
    </div>
  );
}