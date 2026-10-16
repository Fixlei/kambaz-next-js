//3.4 JavaScript Data Structures
//Arrays group several values into a single variable.

export default function SimpleArrays() {
  //eslint-disable-next-line no-var
  var functionScoped = 2;
  //eslint-disable-next-line prefer-const
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  //eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 3, 4, 5];
  //eslint-disable-next-line prefer-const
  let stringArray1 = ["string1", "string2"];
  //eslint-disable-next-line prefer-const
  let htmlArray1 = [
    <li key={1}>Buy milk</li>,
    <li key={2}>Feed the pets</li>,
    <li key={3}>Code some code</li>,
    // With AI: sample todo item
    <li key={4}>Call the dentist</li>,
  ];
  //eslint-disable-next-line prefer-const
  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];
  return (
    <div id="wd-simple-arrays">
      <h4>Simple Arrays</h4>
      numberArray1 = {numberArray1}
      <br />
      stringArray1 = {stringArray1}
      <br />
      variableArray1 = {variableArray1}
      <br />
      Todo list:
      <ol>{htmlArray1}</ol>
      <hr />
    </div>
  );
}
