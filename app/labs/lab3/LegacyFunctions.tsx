//3.3 JavaScript Functions
// Functions allow reusing an algorithm by wrapping
//it in a named, parameterized code block, and you
//can call that block from JSX the same way you call
//it from any other JavaScript.

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

// With AI: sample multiply
function multiply(a: number, b: number) {
  return a * b;
}
export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  const tenMinusOne = subtract(10, 1);
  const threeTimesSeven = multiply(3, 7);
  console.log(twoPlusFour);
  console.log(tenMinusOne);
  console.log(threeTimesSeven);
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour} <br />
      add(2, 4) = {add(2, 4)} <br />
      tenMinusOne = {tenMinusOne} <br />
      subtract(10, 1) = {subtract(10, 1)} <br />
      threeTimesSeven = {threeTimesSeven} <br />
      multiply(3, 7) = {multiply(3, 7)} <hr />
    </div>
  );
}
