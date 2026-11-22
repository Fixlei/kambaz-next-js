"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
import * as client from "../client";

export default function Profile() {
  const { setCurrentUser } = useAccountContext();
  const [profile, setProfile] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await client.profile();
        setProfile(user);
        setCurrentUser(user);
      } catch {
        router.push("/account/signin");
      }
    };
    fetchProfile();
  }, [router, setCurrentUser]);

  const updateProfile = async () => {
    if (!profile) return;
    const updatedUser = await client.updateUser(profile);
    setCurrentUser(updatedUser);
  };

  const signout = async () => {
    await client.signout();
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        type="password"
        id="wd-password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <button type="button" onClick={updateProfile} id="wd-update-profile-btn">
        Update
      </button>
      <button type="button" onClick={signout} id="wd-signout-btn">
        Sign Out
      </button>
    </div>
  );
}
