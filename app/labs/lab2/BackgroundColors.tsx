export default function BackgroundColors() {
  return (
    <>
      <div id="wd-css-background-colors">
        <h2 className="wd-bg-color-blue wd-fg-color-white">Background Colors</h2>
        <p className="wd-bg-color-red wd-fg-color-black">
          this is background of this paragraph is red but{" "}
          <span className="wd-bg-color-green wd-fg-color-white">
            this is background of this span is green but foreground text is white
          </span>
        </p>
        <div id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
          <h3 className="wd-bg-color-yellow wd-fg-color-black">
            Sample stacked block
          </h3>
          <p className="wd-bg-color-yellow wd-fg-color-black">
            This paragraph stacks a yellow background class with a black
            foreground class so the text stays readable.
          </p>
        </div>
      </div>
      <div id="wd-css-background-colors-2">
        <h2 className="wd-bg-color-blue wd-fg-color-white">
          Another Block DIVBackground Colors
        </h2>
        <p className="wd-bg-color-pink wd-fg-color-green">
          this is background of this paragraph is Pink and text is Green but{" "}
          <span className="wd-bg-color-red wd-fg-color-white">
            this is background of this span is red but foreground text is white
          </span>
        </p>
      </div>
    </>
  );
}
