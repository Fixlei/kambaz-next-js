//3.3.1 Arrow functions

const subtract = (a: number, b: number) => {
  return a - b;
};
// With AI: sample arrow multiply
const multiply = (a: number, b: number) => {
  return a * b;
};
const add = (a: number, b: number) => {
  return a + b;
};

export default function ArrowFunctions() {
  const threeMinusOne = subtract(3, 1);
  const twoAddFour = add(2, 4);
  const threeTimesFour = multiply(3, 4);
  console.log(threeMinusOne);
  console.log(twoAddFour);
  console.log(threeTimesFour);  
  return (
    <div id="wd-arrow-functions">
      <h4>New ES6 arrow functions</h4>
      threeMinusOne = {threeMinusOne}
      <br />
      subtract(3, 1) = {subtract(3, 1)}
      <br />
      multiply(3, 4) = {multiply(3, 4)}
      <br />
      twoAddFour = {twoAddFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <hr />
    </div>
  );
}
