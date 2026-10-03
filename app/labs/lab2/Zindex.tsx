export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div>
        <div className="wd-zindex-send-to-back wd-pos-absolute-160-60 wd-bg-color-green wd-fg-color-white wd-rounded-corners-all-around wd-dimension-square">
          Circle
        </div>
        <div
          id="wd-ai-zindex"
          className="wd-ai-zindex-top wd-bg-color-pink wd-fg-color-black wd-dimension-square"
        >
          AI on top
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}