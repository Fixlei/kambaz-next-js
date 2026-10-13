//Conditional expressions allow scripts to make decisions
//based on predicates that compare values and variables.

export default function IfElse() {
  //eslint-disable-next-line prefer-const
  let true1 = true,
    //eslint-disable-next-line prefer-const
    false1 = false;
  return (
    <div id="wd-if-else">
      <h4>If Else</h4>
      {true1 && <p>true1</p>}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
      <hr />
    </div>
  );
}
