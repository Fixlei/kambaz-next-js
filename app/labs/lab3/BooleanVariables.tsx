//To practice with Boolean data types, create
//a component called BooleanVariables and import it in the Lab 3 component.
export default function BooleanVariables() {
  //eslint-disable-next-line prefer-const
  let numberVariable = 123,
    //eslint-disable-next-line prefer-const
    floatingPointNumber = 234.345;
  //eslint-disable-next-line prefer-const
  let true1 = true,
    //eslint-disable-next-line prefer-const
    false1 = false;
  //eslint-disable-next-line prefer-const
  let false2 = true1 && false1;
  //eslint-disable-next-line prefer-const
  let true2 = true1 || false1;
  //eslint-disable-next-line prefer-const
  let true3 = !false2;
  //eslint-disable-next-line prefer-const
  let true4 = numberVariable === 123;
  //eslint-disable-next-line prefer-const
  let true5 = floatingPointNumber !== 321.432;
  //eslint-disable-next-line prefer-const
  let false3 = numberVariable < 100;
  //eslint-disable-next-line prefer-const
  let stringVar1 = "Hello World!";
  //eslint-disable-next-line prefer-const
  let stringVar2 = "Hello world!";
  //eslint-disable-next-line prefer-const
  let isTrue1 = stringVar1 === stringVar2;
  // With AI: sample comparison
  const true6 = numberVariable !== 0;
  return (
    <div id="wd-boolean-variables">
      <h4>Boolean Variables</h4>
      true1 = {true1 + ""}
      <br />
      false1 = {false1 + ""}
      <br />
      false2 = {false2 + ""}
      <br />
      true2 = {true2 + ""}
      <br />
      true3 = {true3 + ""}
      <br />
      true4 = {true4 + ""}
      <br />
      true5 = {true5 + ""}
      <br />
      false3 = {false3 + ""}
      <br />
      true6 = {true6 + ""}
      <hr />
      istrue1 = {isTrue1 + ""}
    </div>
  );
}
