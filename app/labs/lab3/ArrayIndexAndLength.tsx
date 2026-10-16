//To practice with array indices and length, implement a new component 
//called ArrayIndexAndLength based on the code below.

export default function ArrayIndexAndLength() {
  //eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 3, 4, 5];
  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);
  const index9 = numberArray1.indexOf(9); //not found, returns -1
  const index9IsNegativeOne = index9 === -1;
  return (
    <div id="wd-array-index-and-length">
      <h4>Array index and length</h4>
      length1 = {length1}
      <br />
      index1 = {index1}
      <br />
      {/* With AI: hit at index 0 */}
      indexOf1 = {numberArray1.indexOf(1)}
      <br />
      index9 = {index9}
      <br />
      index9IsNegativeOne = {index9IsNegativeOne ? 'Yes' : 'No' };
      <hr />
    </div>
  );
}