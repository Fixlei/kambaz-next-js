export default function VariablesAndConstants() {
  //eslint-disable-next-line no-var
  var functionScoped = 2;
  //eslint-disable-next-line prefer-const
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  //eslint-disable-next-line prefer-const
  let name = "John Doe";
  const age = 30;
  // With AI: sample constant
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4> Variable and Constant Examples</h4>
      functionaScoped = {functionScoped}
      <br />
      balockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      name = {name}
      <br />
      age = {age}
      <br />
      sampleSum = {sampleSum}
      <h1>Variables and Constants</h1>
    </div>
  );
}
