import "./index.css";
import ForegroundColors from "./ForegroundColors"
import BackgroundColors from "./BackgroundColors"
import Borders from "./Borders"
import Padding from "./Padding"
import Margins from "./Margins"
import BoxModel from "./BoxModel"
import Corners from "./Corners"
import Dimensions from "./Dimensions"
import Display from "./Display"


export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attributee</h3>
      <p id="wd-ai-style-attr">
        This paragraph has a purple background and white text.
      </p>
      Style attribute allows configuring look and feel right on the element.
      Although it&apos;s very convenient it is considered bad practice and you
      should avoid using the style attribute
      <p>This paragraph has a green background and yellow text.</p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph uses its own id selector with a distinct color
          scheme.
        </p>
        <p id="wd-id-selestor-3">
          This is third paragraph. It has an ID of wd-id-selector-3
        </p>
      </div>
      <div id="wd-css-descendent-selectors">
        <h3>Descendent and Child Selectors</h3>
        <div className="wd-selector-1">
          <div className="wd-selector-2">
            <div className="wd-selector-3">
              <p className="wd-selector-4">
                Paragraph nested inside multiple divs.
              </p>
              <span className="wd-ai-selector-5">
                Sample span nested inside .wd-selector-3.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="wd-css-specificity">
        <h6>this is a h6 title</h6>
        <h3>CSS specificity conflict</h3>
        <p id="wd-specificity" className="wd-specificity-cls">
          Tag rule (p), class rule (.wd-specificity-cls), and id rule
          (#wd-specificity) all set color differently. The id should win.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample cascade: tag rule (green), class rule (yellow), and id rule
          (red) all set background-color. The id should win.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
    </div>
  );
}
