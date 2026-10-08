// Lab 2 box model: every element is content, wrapped by padding, then border, then margin.
// The box-sizing demo shows that only border-box keeps the declared width on screen.
export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box Model</h2>
      {/* Book demo: each nested div is one layer, from margin down to content */}
      <div className="wd-box-model-margin">
        margin
        <div className="wd-box-model-border">
          border
          <div className="wd-box-model-padding">
            padding
            <div className="wd-box-model-content">content</div>
          </div>
        </div>
      </div>
      <h3>My box model diagram</h3>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">
            border (the red ring)
          </span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
        {/* Same width/padding/border as the two boxes above, but no box-sizing
            is declared, so the browser default (content-box) applies. Only
            border-box keeps the declared 200px width on screen — content-box
            and this default box both add the padding and border on top of it. */}
        <div className="wd-box-sizing-default">
          default (no box-sizing): same as content-box, grows past 200px
        </div>
        {/* My width change: border-box at 300px stays exactly 300px wide */}
        <div className="wd-box-sizing-border wd-box-sizing-wide">
          border-box at width 300px: still 300px on screen
        </div>
      </div>
    </div>
  );
}
