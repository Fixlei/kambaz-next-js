export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      {/* Column 1 is pinned, Column 3 grows into the leftover space */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      {/* My row: the middle column grows, the last one stays pinned at 150px */}
      <h4>My row</h4>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white">Short</div>
        <div className="wd-bg-color-lightblue wd-flex-grow-1">
          I grow to fill the row
        </div>
        <div className="wd-bg-color-pink wd-width-150px">Pinned 150px</div>
      </div>
      {/* With AI: sample grow/pin row */}
      <h4>Sample row (AI)</h4>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Pinned</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural width</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Stretches
        </div>
      </div>
    </div>
  );
}
