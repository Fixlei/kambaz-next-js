"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";
import { isAxiosError } from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [error, setError] = useState("");

  const signup = async () => {
    try {
      const current = await client.signup({ username, password });
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (e) {
      if (isAxiosError(e)) {
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      {error && (
        <p
          id="wd-signup-error"
          className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {error}
        </p>
      )}
      <input
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        id="wd-username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
