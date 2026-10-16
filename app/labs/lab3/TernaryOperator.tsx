//3.2.5 Ternary Conditional Operator

export default function TernaryOperator() {
  //eslint-disable-next-line prefer-const
  let loggedIn = true;
  //let loggedIn = false;
  const hour = 9;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {hour < 12 ? <p>Good Morning</p> : <p>Good Afternoon</p>}
      <hr />
    </div>
  );
}
