//3.2.5 Ternary Conditional Operator

export default function TernaryOperator() {
  //eslint-disable-next-line prefer-const
  let loggedIn = true;
  //let loggedIn = false;
  //with AI premium
  const premium = false;
  const hour = 9;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Login </p>}
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      {premium ? <p>Premium</p> : <p>Free</p>}
      <hr />
    </div>
  );
}
