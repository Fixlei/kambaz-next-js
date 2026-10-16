//3.4.4 Map Function
//map applies a function to each value and collects the results in a new array.

export default function MapFunction() {
  //eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  // With AI: "Email the TA" is the sample fourth todo
  const todos = ["Buy milk", "Feed the pets", "code some code", "Email the TA"];
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares}
      <br />
      cubes = {cubes}
      <br />
      {/* With AI: doubles */}
      doubles = {numberArray1.map((a) => a * 2)}
      <br />
      Todos:
      <ol>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
