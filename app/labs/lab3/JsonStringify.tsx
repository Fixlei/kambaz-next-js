//3.4.10 JSON Stringify
//JSON.stringify shows the real structure of an array, brackets and commas included.

export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <hr />
    </div>
  );
}
