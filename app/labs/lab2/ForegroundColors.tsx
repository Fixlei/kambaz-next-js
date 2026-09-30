export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2> Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground Colors</h3>
      <p className="wd-fg-color-red">
        The text is red in this paragraph but{""}
        <span className="wd-fg-color-green">this is a green color text</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        The text is blue in this paragraph but{" "}
        <span className="wd-fg-color-black">this word is black</span>.
      </p>
    <hr />
    <p className="wd-fg-color-black">
        The text is black in this paragraph but{""}
        <span className="wd-fg-color-white">this is a white color text</span>
      </p>

    </div>
  );
}
