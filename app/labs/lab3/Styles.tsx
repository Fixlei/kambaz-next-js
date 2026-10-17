//The component declares constant objects that can be applied to elements 
// using the style attribute. Alternatively, the style attribute accepts 
// an object literal, which results in a double curly-bracket syntax.

export default function Styles() {
  const colorBlack = { color: "black" };
  const padding10px = { padding: "10px" };
  const bgBlue = {
    backgroundColor: "lightblue",
    color: "black",
    ...padding10px,
  };
  const bgRed = {
    backgroundColor: "lightcoral",
    ...colorBlack,
    ...padding10px,
  };
   const bgGreen = {
    backgroundColor: "lightgreen",
    ...colorBlack,
    ...padding10px,
  };
  // With AI: sample gray box
  const bgGray = { backgroundColor: "lightgray", ...colorBlack, ...padding10px };
  return (
    <div id="wd-styles">
      <h2>Styles</h2>
      <div
        style={{
          backgroundColor: "lightyellow",
          color: "black",
          padding: "10px",
        }}
      >
        Yellow background
      </div>
      <div style={bgRed}>Red background</div>
      <div style={bgBlue}>Blue background</div>
      <div style={bgGreen}>Green background</div>
      <div style={bgGray}>Gray background</div>
    </div>
  );
}