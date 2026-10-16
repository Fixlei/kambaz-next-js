//3.4.9 Reduce
//reduce folds an array down to one value, starting from the accumulator.

export default function ReduceFunction() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((total, n) => total + n, 0);
  return (
    <div id="wd-reduce-function">
      <h4>Reduce Function</h4>
      sum = {sum}
      <hr />
    </div>
  );
}
