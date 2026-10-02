export default function Padding() {
  return (
    <div id="wd-css-padding">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>
      <div className="wd-padded-thin wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Add an one more new Box with thin padding.
      </div>
      <div className="wd-padded-bottom-left wd-border-fat wd-border-green wd-border-solid wd-bg-color-lightblue">
        Add a new Box with padded bottom left
      </div>
      <div
        id="wd-ai-padded"
        className="wd-padded-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Padded top only
      </div>
    </div>
  );
}
