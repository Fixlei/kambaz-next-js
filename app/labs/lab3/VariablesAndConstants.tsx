export default function VariablesAndConstants() {
  //eslint-disable-next-line no-var
  var funcionaScoped = 2;
  //eslint-disable-next-line prefer-const
  let balockScoped = 5;
  const constant1 = funcionaScoped - balockScoped;
  //eslint-disable-next-line prefer-const
  let name = "John Doe";
  const age = 30;
  // With AI: sample constant
  const sampleSum = funcionaScoped + balockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4> Variable and Constant Examples</h4>
      functionaScoped = {funcionaScoped}
      <br />
      balockScoped = {balockScoped}
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
