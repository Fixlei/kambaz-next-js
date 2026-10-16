//3.4.6 Find Index
//findIndex returns the index of the first match, or -1 when nothing matches.

export default function FindIndex() {
  //eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 4, 5, 6];
  //eslint-disable-next-line prefer-const
  let stringArray1 = ["string1", "string3"];
  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      fourIndex = {fourIndex}
      <br />
      string3Index = {string3Index}
      <hr />
    </div>
  );
}
