// Lab 2 borders demo. A visible border needs three things: a width, a style,
// and a color. Each wd-border-* class in index.css sets only one of them,
// so every paragraph mixes one width + one style + one color class.
//   width: wd-border-fat (20px top/bottom, 30px left/right), wd-border-thin (4px)
//   style: wd-border-solid, wd-border-dashed, wd-border-double
//   color: wd-border-red, wd-border-blue, wd-border-yellow, wd-border-gray
export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2> 
      {/* fat + solid + red */}
      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>
      {/* thin + dashed + blue */}
      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>
      {/* fat + dashed + yellow: class order in className doesn't matter */}
      <p className="wd-border-fat wd-border-dashed wd-border-yellow">
        Third Paragraph for example fat + dashed + yellow
      </p>
      {/* thin + double + gray: double draws two lines inside the 4px width */}
      <p className="wd-border-thin wd-border-gray wd-border-double">
        Double thin gray border
      </p>
      {/* With AI: sample mix of existing width, style, and color classes */}
      <p
        id="wd-ai-border"
        className="wd-border-fat wd-border-dashed wd-border-yellow"
      >
        Sample: fat dashed yellow border
      </p>
    </div>
  );
}
