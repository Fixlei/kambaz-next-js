import "./MediaQueriesDemo.css";

// 2.1.20 Media queries: resize the browser window and the box changes color.
// The bold, underlined list item is the rule that matches the current width.
export default function MediaQueriesDemo() {
  return (
    <div id="wd-media-queries">
      <h2>Media queries</h2>
      <div className="wd-media-queries-demo">
        Resize the browser window to change this box&apos;s background color.
        <ul>
          <li className="wd-mq-rule-ai">749px and narrower: purple (AI sample)</li>
          <li className="wd-mq-rule-default">
            Default when no media query matches: green
          </li>
          <li className="wd-mq-rule-750">750px to 1000px: yellow</li>
          <li className="wd-mq-rule-1000">1000px to 1250px: blue</li>
          <li className="wd-mq-rule-1250">1250px to 1500px: red</li>
          <li className="wd-mq-rule-1500">
            1500px and wider: black (my breakpoint)
          </li>
        </ul>
      </div>
    </div>
  );
}
