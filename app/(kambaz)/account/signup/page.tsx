import Link from "next/link";

export default function Signup() {
  return (
    /** 
     * <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        defaultValue="ada"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
     */
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        placeholder="username"
        className="wd-username mb-2 rounded border border-neutral-300 px-3 py-2"
        defaultValue="ada"
      />
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 rounded border border-neutral-300 px-3 py-2"
        defaultValue="123"
      />
      <br />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <Link
        id="wd-signup-btn"
        href="/account/profile"
        className="mb-2 rounded bg-blue-600 px-3 py-2 text-center text-white no-underline margin"
      >
        Sign up
      </Link>
      <Link id="wd-signin-link" href="/account/signin" className="mb-2 w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
        Sign in
      </Link>
    </div>
  );
}