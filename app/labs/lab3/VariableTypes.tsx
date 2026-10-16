/**
 * VariableTypes component demonstrates different variable types in JavaScript.
 */

export default function VariableTypes() {
  // Number, string, and boolean variable examples
  //eslint-disable-next-line prefer-const
  let numberVariable = 123;
  //eslint-disable-next-line prefer-const
  let numberSecond = 456.0;
  //eslint-disable-next-line prefer-const
  let floatingPointNumber = 234.345;
  //eslint-disable-next-line prefer-const
  let stringVariable = "Hello World!";
  //eslint-disable-next-line prefer-const
  let stringSecond = "Hello Again!";
  //eslint-disable-next-line prefer-const
  let booleanVariable = true;
  //eslint-disable-next-line prefer-const
  let isNumber = typeof numberVariable;
  //eslint-disable-next-line prefer-const
  let isNumberSecond = typeof numberSecond;
  //eslint-disable-next-line prefer-const
  let isString = typeof stringVariable;
  //eslint-disable-next-line prefer-const
  let isStringSecond = typeof stringSecond;
  //eslint-disable-next-line prefer-const
  let isBoolean = typeof booleanVariable;
  // With AI: sample number and string
  //eslint-disable-next-line prefer-const
  let sampleCount = 42;
  //eslint-disable-next-line prefer-const
  let sampleLabel = "Lab 3";
  //eslint-disable-next-line prefer-const
  let isSampleCount = typeof sampleCount;
  //eslint-disable-next-line prefer-const
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      numberSecond = {numberSecond}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      stringSecond = {stringSecond}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isStringSecond = {isStringSecond} 
      <br />
      isNumberSecond = {isNumberSecond}
      <br />
      isBoolean = {isBoolean}
      <br />
      sampleCount = {sampleCount}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
