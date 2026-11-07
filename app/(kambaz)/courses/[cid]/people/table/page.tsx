"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { useEnrollmentsStore } from "@/app/(kambaz)/store/enrollmentsStore";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "@/app/(kambaz)/account/AccountContext";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { users, createUser, updateUser, deleteUser } = useAccountContext();
  const [user, setUser] = useState<User>(emptyUser);
  const { enrollments, enrollIntoCourse } = useEnrollmentsStore();
  const enrolled = users.filter((user) =>
    enrollments.some(
      (enrollment) => enrollment.user === user._id && enrollment.course === cid,
    ),
  );
  const addUser = () => {
    const newUser = createUser(user);
    enrollIntoCourse(newUser._id, cid);
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          value={user.firstName}
          id="wd-user-first-name"
          className="rounded border border-neutral-300 px-3 py-1.5"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          value={user.lastName}
          id="wd-user-last-name"
          className="rounded border border-neutral-300 px-3 py-1.5"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <button
          id="wd-add-user-click"
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={addUser}
        >
          Add
        </button>
        <button
          id="wd-update-user-click"
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          onClick={() => updateUser(user)}
        >
          Update
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2 text-nowrap">
                <button
                  type="button"
                  className="rounded bg-yellow-400 px-2 py-1 text-xs font-medium"
                  onClick={() => setUser(user)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="ms-2 rounded bg-red-600 px-2 py-1 text-xs font-medium text-white"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
