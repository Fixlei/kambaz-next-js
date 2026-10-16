//if the body of the function consists of just returning some value or expression,
// then the return statement is optional and can be
// replaced with just the value or expression.

export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const fourTimesFive = multiply(4, 5);
  const square = (n: number) => n * n;
  // With AI: sample implied-return divide
  const divide = (a: number, b: number) => a / b;
  console.log(fourTimesFive);
  console.log(square(2));
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)} <br />
      divide(20, 4) = {divide(20, 4)} <br />
      square(2) = {square(2)};
      <hr />
    </div>
  );
}
