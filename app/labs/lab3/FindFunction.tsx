//3.4.5 Find Function.
//find returns the first element that matches a predicate, or undefined.

export default function FindFunction() {
  //eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 3, 4, 5];
  //eslint-disable-next-line prefer-const
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const ten = numberArray1.find((a) => a === 10);
  const string3 = stringArray1.find((a) => a === "string3");
  // With AI: find a value that exists
  const two = numberArray1.find((a) => a === 2);
  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four}
      <br />
      ten={ten};
      <br />
      string3 = {string3}
      <br />
      two = {two}
      <hr />
    </div>
  );
}
