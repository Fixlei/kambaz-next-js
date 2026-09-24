export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      {/* Absolute — another site */}
      <a href="https://www.lipsum.com">lipsum.com</a>
      <br />
      {/* New tab + safer external link */}
      <a
        href="https://www.linkedin.com/in/minghualeifix"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        Minghua Lei - LinkedIn (new tab)
      </a>
      <br />
      <br />
      <a href="https://www.mass.gov" id="wd-your-link" rel="noreferrer">
        Mass Gov Site
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
      <br />
      {/* Relative — same site */}
      <a href="/labs">Back to Labs</a>
      <br />
      {/* Fragment — same page, scroll to id */}
      <a href="#wd-lab1">Back to top</a>
    </>
  );
}
