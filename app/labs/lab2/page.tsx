import "./index.css";
import Link from "next/link";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <Link href="/labs/lab2/tailwind" id="wd-tailwind-link">
        <span className="wd-bg-color-gray wd-fg-color-blue wd-padding-2 wd-margin-2">Tailwind CSS</span>
      </Link>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and
        you should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph has a green background and yellow text.
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph has a purple background and white text.
      </p>
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
        <p id="wd-id-selector-3">
          This is third paragraph. It has an ID of wd-id-selector-3
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        {/* My own class, shared by a p and an h4 */}
        <p className="wd-your-class">
          My own class: this paragraph and the heading below share one look
        </p>
        <h4 className="wd-your-class">Same wd-your-class on an h4</h4>
        {/* With AI: sample class on a p and an h4 */}
        <p className="wd-ai-class-selector">
          Sample class applied to a paragraph
        </p>
        <h4 className="wd-ai-class-selector">
          The same sample class applied to a heading
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                Sample span nested inside .wd-selector-3.
              </span>
            </p>
            {/* My extra node: a direct child of .wd-selector-2 */}
            <div className="wd-selector-6">
              This div is a direct child of .wd-selector-2, so only the
              .wd-selector-2 &gt; .wd-selector-6 rule colors it
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
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
