//3.2.6 Generating conditional output
//With boolean expressions we can render content based on 
//some logic.

export default function ConditionalOutputIfElse() {
  const loggedIn = true;
  //const loggedIn = false;
  if (loggedIn) {
    return <h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>;
  } else {
    return (
      <h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>
    );
  }
}
