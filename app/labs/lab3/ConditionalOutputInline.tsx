//show login page using ternary operator and if else statements 
//in comparision to inline conditional rendering

export default function ConditionalOutputInline() {
  const loggedIn = false;
  //const loggedIn = true;
  const guest = true;
  // With AI: admin heading
  const admin = true;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
      {guest && <h2>Guest Inline</h2>}
      {admin && <h2>Admin Inline</h2>}
    </div>
  );
}
