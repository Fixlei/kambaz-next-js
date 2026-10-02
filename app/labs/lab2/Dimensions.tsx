// Lab 2 dimensions: wd-dimension-* classes set width and height to make
// portrait (taller), landscape (wider), and square boxes.
export default function Dimensions() {
  return (
    <div className="wd-css-dimensions">
      <h2>Dimensions</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-portrait wd-bg-color-lightgray">
          In Dimensions.tsx, add one more 
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This long sentence does not stretch the box: it stays 120px wide and
          60px tall.
        </div>
      </div>
    </div>
  );
}
