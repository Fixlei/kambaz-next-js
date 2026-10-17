//3.4.7 Filter Function.The filter function can look for elements that meet a criteria and collate them into a new array.
//filter collects every element that passes the predicate into a new array.

export default function FilterFunction() {
  //eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 4, 5, 6];
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const numbersGreaterThanOrEqualTo5 = numberArray1.filter((a) => a >= 5);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  // With AI: sample less-than-2 filter
  const numbersLessThan2 = numberArray1.filter((a) => a < 2);
  {
    /**Filter numbers greater than or equal to 5 into a new constant and display it. */
  }
  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2}
      <br />
      numbersGreaterThanOrEqualTo5 = {numbersGreaterThanOrEqualTo5}
      <br />
      evenNumbers = {evenNumbers}
      <br />
      oddNumbers = {oddNumbers}
      <br />
      numbersLessThan2 = {numbersLessThan2}
      <hr />
    </div>
  );
}
